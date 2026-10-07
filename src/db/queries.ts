import { getDb } from './index';
import { categories as staticCategories } from '@/data/categories';
import type { Product, WeightOption } from '@/data/products';

const SHIPPING_FREE_THRESHOLD = 500000;
const SHIPPING_COST = 45000;
const LOW_STOCK_THRESHOLD = 5;

type Row = Record<string, unknown>;

function str(row: Row, key: string): string {
  const v = row[key];
  return typeof v === 'string' ? v : v == null ? '' : String(v);
}
function num(row: Row, key: string): number {
  const v = row[key];
  return typeof v === 'number' ? v : Number(v) || 0;
}

function categoryNameFor(slug: string) {
  return staticCategories.find((c) => c.slug === slug)?.name || slug;
}

export function stockStatusFor(quantity: number): 'in' | 'low' | 'out' {
  if (quantity <= 0) return 'out';
  if (quantity <= LOW_STOCK_THRESHOLD) return 'low';
  return 'in';
}

function rowToProduct(row: Row, variants: WeightOption[]): Product {
  const quantity = num(row, 'quantity');
  return {
    id: str(row, 'id'),
    slug: str(row, 'slug'),
    name: str(row, 'name'),
    category: str(row, 'category'),
    categoryName: categoryNameFor(str(row, 'category')),
    categorySlug: str(row, 'category'),
    shortDescription: str(row, 'short_description'),
    description: str(row, 'description'),
    ingredients: str(row, 'ingredients') || undefined,
    suitableFor: str(row, 'suitable_for') ? str(row, 'suitable_for').split('|') : undefined,
    storageMethod: str(row, 'storage_method') || undefined,
    weights: variants,
    image: str(row, 'image'),
    oldPrice: row.old_price == null ? undefined : num(row, 'old_price'),
    discount: row.discount == null ? undefined : num(row, 'discount'),
    inStock: quantity > 0,
    stockQuantity: quantity,
    stockStatus: stockStatusFor(quantity),
    tags: str(row, 'tags') ? str(row, 'tags').split('|') : [],
    featured: !!num(row, 'is_featured'),
    bestSeller: !!num(row, 'is_best_seller'),
    newArrival: !!num(row, 'is_new'),
    wholesalePrice: row.wholesale_price == null ? undefined : num(row, 'wholesale_price'),
    rating: row.rating == null ? undefined : num(row, 'rating'),
    isArchived: !!num(row, 'is_archived'),
  };
}

function variantsFor(db: ReturnType<typeof getDb>, productId: string): WeightOption[] {
  const rows = db
    .prepare('SELECT value, label, price FROM product_variants WHERE product_id = ? ORDER BY sort, id')
    .all(productId) as unknown as Row[];
  return rows.map((r) => ({ value: str(r, 'value'), label: str(r, 'label'), price: num(r, 'price') }));
}

function hydrateRows(rows: Row[]): Product[] {
  const db = getDb();
  return rows.map((row) => rowToProduct(row, variantsFor(db, str(row, 'id'))));
}

function baseSelect(where: string, params: unknown[] = [], order = 'p.created_at DESC, p.id DESC'): string {
  return `SELECT p.* FROM products p ${where} ORDER BY ${order}`;
}

export async function getAllProducts(opts?: { includeArchived?: boolean; category?: string; q?: string }): Promise<Product[]> {
  const db = getDb();
  const conds: string[] = [];
  const params: unknown[] = [];
  if (!opts?.includeArchived) conds.push('p.is_archived = 0');
  if (opts?.category) {
    conds.push('p.category = ?');
    params.push(opts.category);
  }
  if (opts?.q) {
    conds.push("(p.name LIKE ? OR p.short_description LIKE ? OR p.description LIKE ? OR p.tags LIKE ?)");
    const like = `%${opts.q}%`;
    params.push(like, like, like, like);
  }
  const where = conds.length ? `WHERE ${conds.join(' AND ')}` : '';
  const rows = db.prepare(baseSelect(where, params)).all(...params) as unknown as Row[];
  return hydrateRows(rows);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const db = getDb();
  const row = db.prepare('SELECT * FROM products WHERE slug = ? AND is_archived = 0').get(slug) as unknown as Row | undefined;
  if (!row) return undefined;
  return rowToProduct(row, variantsFor(db, str(row, 'id')));
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return getAllProducts({ category: categorySlug });
}

export async function getBestSellers(): Promise<Product[]> {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM products WHERE is_archived = 0 AND is_best_seller = 1 ORDER BY rating DESC').all() as unknown as Row[];
  return hydrateRows(rows);
}

export async function getNewArrivals(): Promise<Product[]> {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM products WHERE is_archived = 0 AND is_new = 1 ORDER BY created_at DESC').all() as unknown as Row[];
  return hydrateRows(rows);
}

export async function getFeatured(): Promise<Product[]> {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM products WHERE is_archived = 0 AND is_featured = 1 ORDER BY rating DESC').all() as unknown as Row[];
  return hydrateRows(rows);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const q = query.trim();
  if (!q) return getAllProducts();
  return getAllProducts({ q });
}

// ===== Orders =====

export interface OrderInput {
  name: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  notes?: string;
  items: { productId: string; weight: string; quantity: number }[];
}

export interface PlacedOrder {
  orderNumber: string;
  total: number;
}

export function createOrder(input: OrderInput): { ok: true; order: PlacedOrder } | { ok: false; error: string } {
  const db = getDb();
  if (!input.items.length) return { ok: false, error: 'سبد خرید خالی است' };

  db.exec('BEGIN IMMEDIATE');
  try {
    const lines: { productId: string; name: string; slug: string; label: string; price: number; quantity: number }[] = [];
    for (const item of input.items) {
      const prod = db.prepare('SELECT id, name, slug, is_archived FROM products WHERE id = ?').get(item.productId) as unknown as Row | undefined;
      if (!prod || num(prod, 'is_archived')) return { ok: false, error: 'یکی از محصولات یافت نشد' };
      const variant = db
        .prepare('SELECT value, label, price FROM product_variants WHERE product_id = ? AND value = ?')
        .get(item.productId, item.weight) as unknown as Row | undefined;
      if (!variant) return { ok: false, error: 'وزن انتخاب‌شده یافت نشد' };

      const stock = db.prepare('SELECT quantity FROM products WHERE id = ?').get(item.productId) as unknown as Row;
      const available = num(stock, 'quantity');
      if (available <= 0) return { ok: false, error: `${str(prod, 'name')} ناموجود است` };
      if (item.quantity > available) return { ok: false, error: `موجودی ${str(prod, 'name')} کافی نیست (${available} بسته)` };

      lines.push({
        productId: str(prod, 'id'),
        name: str(prod, 'name'),
        slug: str(prod, 'slug'),
        label: str(variant, 'label'),
        price: num(variant, 'price'),
        quantity: Math.max(1, Math.floor(item.quantity)),
      });
    }

    const subtotal = lines.reduce((s, l) => s + l.price * l.quantity, 0);
    const shipping = subtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_COST;
    const total = subtotal + shipping;
    const orderNumber = `NB-${Math.floor(100000 + Math.random() * 900000)}`;

    db.prepare(`
      INSERT INTO orders (order_number, customer_name, phone, province, city, address, postal_code, notes, subtotal, shipping, total, payment_method)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'on-delivery')
    `).run(
      orderNumber, input.name, input.phone, input.province, input.city,
      input.address, input.postalCode, input.notes || '', subtotal, shipping, total
    );
    const orderId = (db.prepare('SELECT id FROM orders WHERE order_number = ?').get(orderNumber) as unknown as Row).id as number;

    const insertItem = db.prepare(`
      INSERT INTO order_items (order_id, product_id, product_name, product_slug, variant_label, price, quantity)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const decrement = db.prepare('UPDATE products SET quantity = quantity - ? WHERE id = ?');
    for (const l of lines) {
      insertItem.run(orderId, l.productId, l.name, l.slug, l.label, l.price, l.quantity);
      decrement.run(l.quantity, l.productId);
    }

    db.exec('COMMIT');
    return { ok: true, order: { orderNumber, total } };
  } catch (e) {
    db.exec('ROLLBACK');
    return { ok: false, error: 'خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.' };
  }
}

// ===== Wholesale =====

export function createWholesaleRequest(input: { name: string; phone: string; product: string; quantity: string; notes?: string }) {
  const db = getDb();
  db.prepare(`
    INSERT INTO wholesale_requests (name, phone, product, quantity, notes)
    VALUES (?, ?, ?, ?, ?)
  `).run(input.name, input.phone, input.product, input.quantity, input.notes || '');
  return { ok: true };
}

// ===== Admin =====

export interface AdminProductInput {
  name: string;
  category: string;
  slug?: string;
  shortDescription?: string;
  description?: string;
  ingredients?: string;
  suitableFor?: string;
  storageMethod?: string;
  image?: string;
  oldPrice?: number | null;
  discount?: number | null;
  quantity?: number;
  isArchived?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
  wholesalePrice?: number | null;
  variants: { value: string; label: string; price: number }[];
}

function toSlug(name: string): string {
  return (
    name
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\p{L}\p{N}-]/gu, '')
      .toLowerCase() || `p-${Date.now()}`
  );
}

export function createAdminProduct(input: AdminProductInput): { ok: true; id: string } | { ok: false; error: string } {
  const db = getDb();
  if (!input.name.trim()) return { ok: false, error: 'نام محصول الزامی است' };
  if (!input.variants.length) return { ok: false, error: 'حداقل یک وزن/قیمت لازم است' };

  const id = `c${Date.now().toString(36)}`;
  let slug = input.slug?.trim() || toSlug(input.name);
  const exists = db.prepare('SELECT id FROM products WHERE slug = ?').get(slug);
  if (exists) slug = `${slug}-${Math.floor(Math.random() * 900 + 100)}`;

  db.prepare(`
    INSERT INTO products (
      id, slug, name, category, short_description, description, ingredients,
      suitable_for, storage_method, image, old_price, discount, quantity,
      is_archived, is_featured, is_best_seller, is_new, wholesale_price, tags
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '')
  `).run(
    id, slug, input.name.trim(), input.category,
    input.shortDescription || '', input.description || '', input.ingredients || '',
    input.suitableFor || '', input.storageMethod || '', input.image || '',
    input.oldPrice ?? null, input.discount ?? null, input.quantity ?? 0,
    input.isArchived ? 1 : 0, input.isFeatured ? 1 : 0, input.isBestSeller ? 1 : 0, input.isNew ? 1 : 0,
    input.wholesalePrice ?? null
  );
  replaceVariants(db, id, input.variants);
  return { ok: true, id };
}

export function updateAdminProduct(id: string, input: AdminProductInput): { ok: boolean; error?: string } {
  const db = getDb();
  const exists = db.prepare('SELECT id FROM products WHERE id = ?').get(id);
  if (!exists) return { ok: false, error: 'محصول یافت نشد' };

  db.prepare(`
    UPDATE products SET
      name = ?, category = ?, short_description = ?, description = ?, ingredients = ?,
      suitable_for = ?, storage_method = ?, image = ?, old_price = ?, discount = ?,
      quantity = ?, is_archived = ?, is_featured = ?, is_best_seller = ?, is_new = ?, wholesale_price = ?
    WHERE id = ?
  `).run(
    input.name.trim(), input.category,
    input.shortDescription || '', input.description || '', input.ingredients || '',
    input.suitableFor || '', input.storageMethod || '', input.image || '',
    input.oldPrice ?? null, input.discount ?? null, input.quantity ?? 0,
    input.isArchived ? 1 : 0, input.isFeatured ? 1 : 0, input.isBestSeller ? 1 : 0, input.isNew ? 1 : 0,
    input.wholesalePrice ?? null, id
  );
  replaceVariants(db, id, input.variants);
  return { ok: true };
}

function replaceVariants(db: ReturnType<typeof getDb>, productId: string, variants: AdminProductInput['variants']) {
  db.prepare('DELETE FROM product_variants WHERE product_id = ?').run(productId);
  const insert = db.prepare('INSERT INTO product_variants (product_id, value, label, price, sort) VALUES (?, ?, ?, ?, ?)');
  variants.forEach((v, i) => {
    insert.run(productId, v.value, v.label, v.price, i);
  });
}

export function deleteAdminProduct(id: string) {
  const db = getDb();
  db.prepare('DELETE FROM product_variants WHERE product_id = ?').run(id);
  db.prepare('DELETE FROM products WHERE id = ?').run(id);
  return { ok: true };
}

export interface AdminOrderItem {
  productName: string;
  productSlug: string;
  variantLabel: string;
  price: number;
  quantity: number;
}

export interface AdminOrder {
  id: number;
  orderNumber: string;
  customerName: string;
  phone: string;
  province: string;
  city: string;
  address: string;
  postalCode: string;
  notes: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
  createdAt: number;
  items: AdminOrderItem[];
}

const ORDER_STATUSES = ['pending', 'preparing', 'shipped', 'delivered', 'canceled'];

export function getAdminOrders(): AdminOrder[] {
  const db = getDb();
  const orders = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all() as unknown as Row[];
  const itemsStmt = db.prepare('SELECT * FROM order_items WHERE order_id = ? ORDER BY id');
  return orders.map((o) => {
    const items = itemsStmt.all((o.id as number)) as unknown as Row[];
    return {
      id: num(o, 'id'),
      orderNumber: str(o, 'order_number'),
      customerName: str(o, 'customer_name'),
      phone: str(o, 'phone'),
      province: str(o, 'province'),
      city: str(o, 'city'),
      address: str(o, 'address'),
      postalCode: str(o, 'postal_code'),
      notes: str(o, 'notes'),
      subtotal: num(o, 'subtotal'),
      shipping: num(o, 'shipping'),
      total: num(o, 'total'),
      status: str(o, 'status'),
      createdAt: num(o, 'created_at'),
      items: items.map((it) => ({
        productName: str(it, 'product_name'),
        productSlug: str(it, 'product_slug'),
        variantLabel: str(it, 'variant_label'),
        price: num(it, 'price'),
        quantity: num(it, 'quantity'),
      })),
    };
  });
}

export function updateOrderStatus(id: number, status: string): { ok: boolean; error?: string } {
  if (!ORDER_STATUSES.includes(status)) return { ok: false, error: 'وضعیت نامعتبر است' };
  const db = getDb();
  db.prepare('UPDATE orders SET status = ? WHERE id = ?').run(status, id);
  return { ok: true };
}

export function getWholesaleRequests(): (Row & { id: number })[] {
  const db = getDb();
  const rows = db.prepare('SELECT * FROM wholesale_requests ORDER BY created_at DESC').all() as unknown as Row[];
  return rows.map((r) => ({
    id: num(r, 'id'),
    name: str(r, 'name'),
    phone: str(r, 'phone'),
    product: str(r, 'product'),
    quantity: str(r, 'quantity'),
    notes: str(r, 'notes'),
    status: str(r, 'status'),
    createdAt: num(r, 'created_at'),
  }));
}

export function updateWholesaleStatus(id: number, status: string): { ok: boolean; error?: string } {
  if (!['new', 'contacted', 'done'].includes(status)) return { ok: false, error: 'وضعیت نامعتبر است' };
  const db = getDb();
  db.prepare('UPDATE wholesale_requests SET status = ? WHERE id = ?').run(status, id);
  return { ok: true };
}

export const ORDER_STATUS_LABELS: Record<string, string> = {
  pending: 'در انتظار بررسی',
  preparing: 'در حال آماده‌سازی',
  shipped: 'ارسال‌شده',
  delivered: 'تحویل‌شده',
  canceled: 'لغو‌شده',
};

export const WHOLESALE_STATUS_LABELS: Record<string, string> = {
  new: 'جدید',
  contacted: 'تماس گرفته شد',
  done: 'تکمیل‌شده',
};

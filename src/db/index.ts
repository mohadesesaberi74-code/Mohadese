import { DatabaseSync } from 'node:sqlite';
import fs from 'fs';
import path from 'path';
import { products as seedProducts } from '@/data/products';

export const DATA_DIR = process.env.NOBARANEH_DATA_DIR || path.join(process.cwd(), 'data');
export const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
const DB_PATH = path.join(DATA_DIR, 'nobaraneh.db');

let dbInstance: DatabaseSync | null = null;

export function getDb(): DatabaseSync {
  if (dbInstance) return dbInstance;

  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });

  const db = new DatabaseSync(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      short_description TEXT DEFAULT '',
      description TEXT DEFAULT '',
      ingredients TEXT DEFAULT '',
      suitable_for TEXT DEFAULT '',
      storage_method TEXT DEFAULT '',
      image TEXT DEFAULT '',
      old_price INTEGER,
      discount INTEGER,
      quantity INTEGER DEFAULT 0,
      is_archived INTEGER DEFAULT 0,
      is_featured INTEGER DEFAULT 0,
      is_best_seller INTEGER DEFAULT 0,
      is_new INTEGER DEFAULT 0,
      wholesale_price INTEGER,
      rating REAL,
      tags TEXT DEFAULT '',
      created_at INTEGER DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS product_variants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
      value TEXT NOT NULL,
      label TEXT NOT NULL,
      price INTEGER NOT NULL,
      sort INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_number TEXT UNIQUE NOT NULL,
      customer_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      province TEXT NOT NULL,
      city TEXT NOT NULL,
      address TEXT NOT NULL,
      postal_code TEXT NOT NULL,
      notes TEXT DEFAULT '',
      subtotal INTEGER NOT NULL,
      shipping INTEGER NOT NULL,
      total INTEGER NOT NULL,
      payment_method TEXT DEFAULT 'on-delivery',
      status TEXT DEFAULT 'pending',
      created_at INTEGER DEFAULT (unixepoch())
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
      product_id TEXT NOT NULL,
      product_name TEXT NOT NULL,
      product_slug TEXT NOT NULL,
      variant_label TEXT NOT NULL,
      price INTEGER NOT NULL,
      quantity INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS wholesale_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      product TEXT DEFAULT '',
      quantity TEXT DEFAULT '',
      notes TEXT DEFAULT '',
      status TEXT DEFAULT 'new',
      created_at INTEGER DEFAULT (unixepoch())
    );
  `);

  seedIfEmpty(db);

  dbInstance = db;
  return db;
}

// Deterministic demo stock so the three states (موجود / محدود / ناموجود) are all visible.
const LIMITED = new Set(['sumac', 'dried-peach']);
const OUT = new Set(['lavender']);

function seedIfEmpty(db: DatabaseSync) {
  const count = db.prepare('SELECT COUNT(*) AS c FROM products').get() as { c: number };
  if (count.c > 0) return;

  const insertProduct = db.prepare(`
    INSERT INTO products (
      id, slug, name, category, short_description, description, ingredients,
      suitable_for, storage_method, image, old_price, discount, quantity,
      is_archived, is_featured, is_best_seller, is_new, wholesale_price, rating, tags
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const insertVariant = db.prepare(`
    INSERT INTO product_variants (product_id, value, label, price, sort)
    VALUES (?, ?, ?, ?, ?)
  `);

  for (const p of seedProducts) {
    const quantity = OUT.has(p.slug) ? 0 : LIMITED.has(p.slug) ? 4 : 25;
    insertProduct.run(
      p.id,
      p.slug,
      p.name,
      p.category,
      p.shortDescription || '',
      p.description || '',
      p.ingredients || '',
      (p.suitableFor || []).join('|'),
      p.storageMethod || '',
      p.image || '',
      p.oldPrice ?? null,
      p.discount ?? null,
      quantity,
      0,
      p.featured ? 1 : 0,
      p.bestSeller ? 1 : 0,
      p.newArrival ? 1 : 0,
      p.wholesalePrice ?? null,
      p.rating ?? null,
      p.tags.join('|')
    );
    p.weights.forEach((w, i) => {
      insertVariant.run(p.id, w.value, w.label, w.price, i);
    });
  }
}

export function getUploadsDir() {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  return UPLOADS_DIR;
}

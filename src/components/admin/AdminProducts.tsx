'use client';

import { useEffect, useMemo, useState } from 'react';
import { categories } from '@/data/categories';

interface VariantRow {
  value: string;
  label: string;
  price: string;
}

interface ProductForm {
  id?: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  ingredients: string;
  suitableFor: string;
  storageMethod: string;
  image: string;
  quantity: string;
  oldPrice: string;
  variants: VariantRow[];
  isFeatured: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  isArchived: boolean;
}

const emptyForm: ProductForm = {
  name: '', category: 'single-spices', shortDescription: '', description: '',
  ingredients: '', suitableFor: '', storageMethod: '', image: '',
  quantity: '25', oldPrice: '',
  variants: [{ value: '', label: '۱۰۰ گرم', price: '' }],
  isFeatured: false, isBestSeller: false, isNew: false, isArchived: false,
};

interface AdminProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  ingredients?: string;
  suitableFor?: string[];
  storageMethod?: string;
  image: string;
  oldPrice?: number;
  discount?: number;
  inStock: boolean;
  stockQuantity?: number;
  stockStatus?: string;
  isArchived?: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  weights: { value: string; label: string; price: number }[];
}

const inputCls = 'w-full bg-parchment border border-stone rounded-arch px-3 py-2 text-sm focus:border-emerald focus:outline-none';

export default function AdminProducts() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<ProductForm | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/products');
    if (res.ok) {
      const data = await res.json();
      setProducts(data.products);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return products;
    return products.filter((p) => p.name.includes(query.trim()));
  }, [products, query]);

  const openNew = () => { setError(''); setEditing({ ...emptyForm }); };

  const openEdit = (p: AdminProduct) => {
    setError('');
    setEditing({
      id: p.id,
      name: p.name,
      category: p.category,
      shortDescription: p.shortDescription || '',
      description: p.description || '',
      ingredients: p.ingredients || '',
      suitableFor: (p.suitableFor || []).join('، '),
      storageMethod: p.storageMethod || '',
      image: p.image || '',
      quantity: String(p.stockQuantity ?? 0),
      oldPrice: p.oldPrice ? String(p.oldPrice) : '',
      variants: p.weights.map((w) => ({ value: w.value, label: w.label, price: String(w.price) })),
      isFeatured: !!p.featured,
      isBestSeller: !!p.bestSeller,
      isNew: !!p.newArrival,
      isArchived: !!p.isArchived,
    });
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError('');
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    const data = await res.json().catch(() => ({ ok: false }));
    setUploading(false);
    if (data.ok && editing) {
      setEditing({ ...editing, image: data.url });
    } else if (!data.ok) {
      setError(data.error || 'آپلود تصویر ناموفق بود');
    }
  };

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    setError('');
    const payload = {
      name: editing.name,
      category: editing.category,
      shortDescription: editing.shortDescription,
      description: editing.description,
      ingredients: editing.ingredients,
      suitableFor: editing.suitableFor,
      storageMethod: editing.storageMethod,
      image: editing.image,
      quantity: Number(editing.quantity) || 0,
      oldPrice: editing.oldPrice ? Number(editing.oldPrice) : null,
      variants: editing.variants
        .filter((v) => v.label.trim() && v.price)
        .map((v, i) => ({
          value: v.value || `v${Date.now().toString(36)}-${i}`,
          label: v.label.trim(),
          price: Number(v.price) || 0,
        })),
      isFeatured: editing.isFeatured,
      isBestSeller: editing.isBestSeller,
      isNew: editing.isNew,
      isArchived: editing.isArchived,
    };
    const res = await fetch(editing.id ? `/api/admin/products/${editing.id}` : '/api/admin/products', {
      method: editing.id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({ ok: false }));
    setSaving(false);
    if (data.ok) {
      setEditing(null);
      load();
    } else {
      setError(data.error || 'ذخیره ناموفق بود');
    }
  };

  const remove = async (p: AdminProduct) => {
    if (!confirm(`محصول «${p.name}» برای همیشه حذف شود؟`)) return;
    await fetch(`/api/admin/products/${p.id}`, { method: 'DELETE' });
    load();
  };

  const toggleArchive = async (p: AdminProduct) => {
    // Archive = keep the product but hide it from the public shop
    const res = await fetch(`/api/admin/products/${p.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: p.name, category: p.category, shortDescription: p.shortDescription,
        description: p.description, ingredients: p.ingredients || '',
        suitableFor: (p.suitableFor || []).join('، '), storageMethod: p.storageMethod || '',
        image: p.image, quantity: p.stockQuantity ?? 0,
        oldPrice: p.oldPrice ?? null,
        variants: p.weights.map((w) => ({ value: w.value, label: w.label, price: w.price })),
        isFeatured: !!p.featured, isBestSeller: !!p.bestSeller, isNew: !!p.newArrival,
        isArchived: !p.isArchived,
      }),
    });
    if (!res.ok) alert('عملیات ناموفق بود');
    load();
  };

  if (loading) {
    return <p className="text-sm text-charcoal/50 py-10 text-center">در حال بارگذاری محصولات...</p>;
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button onClick={openNew} className="btn-primary px-5 py-2.5 rounded-full text-sm font-bold">
          + افزودن محصول جدید
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجوی محصول..."
          className={`${inputCls} max-w-xs rounded-full`}
        />
        <span className="text-xs text-charcoal/50 mr-auto">
          {filtered.length.toLocaleString('fa-IR')} محصول
        </span>
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.map((p) => (
          <div key={p.id} className={`bg-parchment border border-stone/60 rounded-arch-lg p-3 flex items-center gap-3 flex-wrap ${p.isArchived ? 'opacity-50' : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt="" className="w-12 h-12 rounded-arch object-cover bg-stone/20" />
            <div className="min-w-[140px] flex-1">
              <p className="text-sm font-bold text-charcoal">{p.name}</p>
              <p className="text-xs text-charcoal/50">{p.categoryName}</p>
            </div>
            {/* Price (cheapest size) */}
            <div className="text-xs text-charcoal/70 min-w-[110px]">
              <span className="block text-charcoal/40">قیمت</span>
              {(p.weights[0]?.price ?? 0).toLocaleString('fa-IR')} تومان
            </div>
            {/* Stock */}
            <div className="text-xs min-w-[110px]">
              <span className="block text-charcoal/40">موجودی</span>
              <span className={
                p.stockStatus === 'out' ? 'text-clay' : p.stockStatus === 'low' ? 'text-amber-600' : 'text-emerald'
              }>
                {p.stockStatus === 'out' ? '🔴 ناموجود' : p.stockStatus === 'low' ? '🟡 محدود' : '🟢 موجود'}
                {` (${(p.stockQuantity ?? 0).toLocaleString('fa-IR')})`}
              </span>
            </div>
            {/* Actions */}
            <div className="flex items-center gap-2 mr-auto">
              <button onClick={() => openEdit(p)} className="text-xs bg-emerald/10 text-emerald px-3 py-1.5 rounded-full hover:bg-emerald/20">
                ویرایش
              </button>
              <button onClick={() => toggleArchive(p)} className="text-xs bg-cinnamon/10 text-cinnamon px-3 py-1.5 rounded-full hover:bg-cinnamon/20">
                {p.isArchived ? 'نمایش' : 'بایگانی'}
              </button>
              <button onClick={() => remove(p)} className="text-xs bg-clay/10 text-clay px-3 py-1.5 rounded-full hover:bg-clay/20">
                حذف
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-charcoal/40 text-center py-10">محصولی یافت نشد</p>
        )}
      </div>

      {/* Editor overlay */}
      {editing && (
        <div className="fixed inset-0 z-50 bg-charcoal/50 flex items-start md:items-center justify-center p-3 overflow-y-auto">
          <div className="bg-parchment rounded-arch-lg shadow-card w-full max-w-2xl p-5 my-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-charcoal">
                {editing.id ? 'ویرایش محصول' : 'افزودن محصول جدید'}
              </h2>
              <button onClick={() => setEditing(null)} className="text-charcoal/40 hover:text-charcoal text-2xl leading-none">×</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">نام محصول *</label>
                <input value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} className={inputCls} placeholder="مثلا: زردچوبه" />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">دسته‌بندی *</label>
                <select value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className={inputCls}>
                  {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">موجودی (تعداد بسته) *</label>
                <input type="number" min="0" value={editing.quantity} onChange={(e) => setEditing({ ...editing, quantity: e.target.value })} className={inputCls} placeholder="25" />
                <p className="text-[10px] text-charcoal/40 mt-1">۰ = ناموجود، ۱ تا ۵ = موجودی محدود، بیش از ۵ = موجود</p>
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">قیمت قبل از تخفیف (اختیاری)</label>
                <input type="number" min="0" value={editing.oldPrice} onChange={(e) => setEditing({ ...editing, oldPrice: e.target.value })} className={inputCls} placeholder="مثلا 50000" />
              </div>

              {/* Variants */}
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">وزن و قیمت بسته‌ها *</label>
                <div className="space-y-2">
                  {editing.variants.map((v, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        value={v.label}
                        onChange={(e) => {
                          const variants = [...editing.variants];
                          variants[i] = { ...v, label: e.target.value };
                          setEditing({ ...editing, variants });
                        }}
                        className={`${inputCls} flex-1`}
                        placeholder="وزن — مثلا: ۱۵۰ گرم"
                      />
                      <input
                        type="number"
                        min="0"
                        value={v.price}
                        onChange={(e) => {
                          const variants = [...editing.variants];
                          variants[i] = { ...v, price: e.target.value };
                          setEditing({ ...editing, variants });
                        }}
                        className={`${inputCls} w-40`}
                        placeholder="قیمت (تومان)"
                      />
                      {editing.variants.length > 1 && (
                        <button
                          onClick={() => setEditing({ ...editing, variants: editing.variants.filter((_, j) => j !== i) })}
                          className="text-clay text-lg leading-none px-1"
                          aria-label="حذف"
                        >×</button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setEditing({ ...editing, variants: [...editing.variants, { value: '', label: '', price: '' }] })}
                    className="text-xs text-emerald font-semibold hover:underline"
                  >
                    + افزودن وزن دیگر
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">تصویر محصول</label>
                <div className="flex items-center gap-3">
                  {editing.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={editing.image} alt="" className="w-16 h-16 rounded-arch object-cover border border-stone" />
                  )}
                  <label className="text-xs bg-emerald/10 text-emerald px-4 py-2 rounded-full cursor-pointer hover:bg-emerald/20">
                    {uploading ? 'در حال آپلود...' : 'انتخاب تصویر'}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) handleUpload(f); }}
                    />
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">توضیح کوتاه</label>
                <input value={editing.shortDescription} onChange={(e) => setEditing({ ...editing, shortDescription: e.target.value })} className={inputCls} placeholder="یک جمله درباره محصول" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">توضیحات کامل</label>
                <textarea rows={3} value={editing.description} onChange={(e) => setEditing({ ...editing, description: e.target.value })} className={`${inputCls} resize-none`} />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">ترکیبات</label>
                <input value={editing.ingredients} onChange={(e) => setEditing({ ...editing, ingredients: e.target.value })} className={inputCls} placeholder="مثلا: زردچوبه، فلفل سیاه" />
              </div>
              <div>
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">مناسب برای (با ویرگول جدا کنید)</label>
                <input value={editing.suitableFor} onChange={(e) => setEditing({ ...editing, suitableFor: e.target.value })} className={inputCls} placeholder="خورش‌ها، برنج" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs font-medium text-charcoal/70 mb-1 block">روش نگهداری</label>
                <input value={editing.storageMethod} onChange={(e) => setEditing({ ...editing, storageMethod: e.target.value })} className={inputCls} />
              </div>

              {/* Flags */}
              <div className="md:col-span-2 flex flex-wrap gap-4">
                {([
                  ['isFeatured', 'پیشنهاد ویژه'],
                  ['isBestSeller', 'پرفروش'],
                  ['isNew', 'جدید'],
                  ['isArchived', 'بایگانی‌شده (مخفی از سایت)'],
                ] as const).map(([key, label]) => (
                  <label key={key} className="flex items-center gap-2 text-sm text-charcoal/70 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editing[key]}
                      onChange={(e) => setEditing({ ...editing, [key]: e.target.checked })}
                      className="w-4 h-4 accent-emerald"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {error && <p className="text-xs text-clay mt-3">{error}</p>}

            <div className="flex gap-3 mt-5">
              <button onClick={save} disabled={saving} className="btn-primary px-8 py-3 rounded-full text-sm font-bold disabled:opacity-60">
                {saving ? 'در حال ذخیره...' : 'ذخیره محصول'}
              </button>
              <button onClick={() => setEditing(null)} className="text-sm text-charcoal/60 hover:text-charcoal px-4">
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

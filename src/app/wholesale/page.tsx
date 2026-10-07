'use client';

import { useState } from 'react';
import { CheckIcon } from '@/components/Icons';

const features = ['قیمت همکاری', 'امکان سفارش در حجم بالا', 'آماده‌سازی سفارش', 'بسته‌بندی مناسب فروش', 'امکان سفارش ترکیبی'];
const productTypes = ['ادویه‌های تک', 'ادویه‌های ترکیبی', 'سبزیجات خشک', 'آرد', 'محصولات ویژه'];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', phone: '', productType: '', volume: '', notes: '' });

  return (
    <div className="min-h-screen bg-parchment">
      <div className="bg-charcoal text-parchment py-12 md:py-16 pattern-boteh">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">برای همکاران نوبرانه</h1>
          <p className="text-sm md:text-base text-parchment/70 leading-relaxed">
            اگر فروشگاه، عطاری یا کسب‌وکار مواد غذایی دارید، امکان ثبت سفارش عمده محصولات نوبرانه فراهم است.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <h2 className="text-lg font-bold text-charcoal mb-4">انواع محصولات</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {productTypes.map((t) => (
                <span key={t} className="text-xs bg-emerald/8 text-emerald px-3 py-2 rounded-full">{t}</span>
              ))}
            </div>
            <h2 className="text-lg font-bold text-charcoal mb-4">امکانات</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-charcoal/70">
                  <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center text-emerald shrink-0">
                    <CheckIcon size={14} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-parchment rounded-arch-lg border border-stone/50 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mx-auto mb-4">
                  <CheckIcon size={32} />
                </div>
                <h3 className="text-lg font-bold text-emerald mb-2">درخواست شما ثبت شد!</h3>
                <p className="text-sm text-charcoal/60">به‌زودی با شما تماس می‌گیریم.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-parchment rounded-arch-lg border border-stone/50 p-5 space-y-4"
              >
                <h2 className="text-base font-bold text-charcoal">فرم ثبت سفارش عمده</h2>
                <input
                  type="text" required placeholder="نام و نام خانوادگی" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                />
                <input
                  type="text" placeholder="نام کسب‌وکار / فروشگاه" value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                />
                <input
                  type="tel" required placeholder="شماره تماس" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                />
                <select
                  required value={form.productType}
                  onChange={(e) => setForm({ ...form, productType: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                >
                  <option value="">نوع محصول</option>
                  {productTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input
                  type="text" placeholder="حجم تقریبی سفارش" value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                />
                <textarea
                  placeholder="توضیحات" rows={3} value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none resize-none"
                />
                <button type="submit" className="w-full btn-primary py-3.5 rounded-full text-sm font-bold">ثبت سفارش عمده</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useCart, formatPrice } from '@/components/CartContext';
import { CheckIcon } from '@/components/Icons';

const provinces = ['تهران', 'اصفهان', 'فارس', 'خراسان رضوی', 'آذربایجان شرقی', 'گیلان', 'مازندران', 'کرمان', 'یزد', 'البرز', 'قم', 'سایر استان‌ها'];

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState('');
  const [form, setForm] = useState({
    name: '', phone: '', province: '', city: '', address: '', postalCode: '', notes: '',
  });

  const shippingCost = cartTotal >= 500000 ? 0 : 45000;
  const grandTotal = cartTotal + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setOrderError('');
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          province: form.province,
          city: form.city,
          address: form.address,
          postalCode: form.postalCode,
          notes: form.notes,
          items: items.map((i) => ({ productId: i.product.id, weight: i.weight, quantity: i.quantity })),
        }),
      });
      const data = await res.json().catch(() => ({ ok: false, error: 'خطا در ثبت سفارش' }));
      if (data.ok) {
        setOrderNumber(data.order.orderNumber);
        setSubmitted(true);
        clearCart();
        window.scrollTo(0, 0);
      } else {
        setOrderError(data.error || 'خطا در ثبت سفارش. لطفاً دوباره تلاش کنید.');
      }
    } catch {
      setOrderError('خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mx-auto mb-5">
            <CheckIcon size={40} />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-3">سفارش شما ثبت شد!</h1>
          <p className="text-sm text-charcoal/60 mb-2">به‌زودی با شما تماس می‌گیریم تا جزئیات ارسال و پرداخت را هماهنگ کنیم.</p>
          <p className="text-xs text-charcoal/40 mb-6">کد پیگیری: {orderNumber}</p>
          <a href="/" className="btn-primary px-7 py-3 rounded-full text-sm font-semibold inline-block">بازگشت به خانه</a>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-charcoal mb-2">سبد خرید خالی است</h1>
          <a href="/shop" className="btn-primary px-7 py-3 rounded-full text-sm font-semibold inline-block mt-4">مشاهده محصولات</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">تکمیل سفارش</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
          {/* Form */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-parchment rounded-arch-lg border border-stone/50 p-5">
              <h2 className="text-base font-bold text-charcoal mb-4">اطلاعات تحویل</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">نام و نام خانوادگی *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    placeholder="نام کامل"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">شماره موبایل *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">استان *</label>
                  <select
                    required
                    value={form.province}
                    onChange={(e) => setForm({ ...form, province: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                  >
                    <option value="">انتخاب کنید</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">شهر *</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    placeholder="نام شهر"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">آدرس کامل *</label>
                  <input
                    type="text"
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    placeholder="خیابان، کوچه، پلاک، واحد"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">کد پستی *</label>
                  <input
                    type="text"
                    required
                    value={form.postalCode}
                    onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
                    placeholder="۱۰ رقم"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">توضیحات سفارش</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none resize-none"
                    placeholder="توضیحات اختیاری..."
                  />
                </div>
              </div>
            </div>

            {/* Payment placeholder */}
            <div className="bg-parchment rounded-arch-lg border border-stone/50 p-5">
              <h2 className="text-base font-bold text-charcoal mb-2">روش پرداخت</h2>
              <p className="text-xs text-charcoal/50 mb-3">درگاه پرداخت ایرانی به‌زودی فعال می‌شود.</p>
              <div className="flex items-center gap-3 p-3 border border-stone rounded-arch bg-emerald/5">
                <input type="radio" checked readOnly className="accent-emerald" />
                <span className="text-sm text-charcoal/70">پرداخت آنلاین (به‌زودی)</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-stone rounded-arch mt-2">
                <input type="radio" readOnly className="accent-emerald" />
                <span className="text-sm text-charcoal/70">پرداخت در محل</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-1">
            <div className="bg-parchment rounded-arch-lg border border-stone/50 p-5 sticky top-24">
              <h2 className="text-base font-bold text-charcoal mb-4">خلاصه سفارش</h2>
              <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.weight}`} className="flex items-center gap-2 text-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.product.image} alt="" className="w-10 h-10 rounded-arch object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-charcoal truncate">{item.product.name}</p>
                      <p className="text-charcoal/50">{item.weightLabel} × {item.quantity.toLocaleString('fa-IR')}</p>
                    </div>
                    <span className="text-charcoal/70">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone/50 pt-3 space-y-2 text-sm">
                <div className="flex justify-between text-charcoal/70">
                  <span>جمع کالاها</span>
                  <span>{formatPrice(cartTotal)} تومان</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>هزینه ارسال</span>
                  <span className={shippingCost === 0 ? 'text-emerald' : ''}>{shippingCost === 0 ? 'رایگان' : `${formatPrice(shippingCost)} تومان`}</span>
                </div>
                <div className="flex justify-between items-baseline border-t border-stone/50 pt-2 mt-2">
                  <span className="font-bold text-charcoal">مجموع کل</span>
                  <span className="text-lg font-bold text-emerald">{formatPrice(grandTotal)} <span className="text-xs font-normal">تومان</span></span>
                </div>
              </div>
              {orderError && <p className="text-xs text-clay mb-3">{orderError}</p>}
              <button type="submit" disabled={submitting} className="w-full btn-primary py-3.5 rounded-full text-sm font-bold mt-5 disabled:opacity-60">
                {submitting ? 'در حال ثبت...' : 'ثبت نهایی سفارش'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

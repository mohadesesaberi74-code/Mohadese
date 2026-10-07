'use client';

import { useEffect, useState } from 'react';

interface AdminOrder {
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
  items: { productName: string; productSlug: string; variantLabel: string; price: number; quantity: number }[];
}

const STATUS_LABELS: Record<string, string> = {
  pending: 'در انتظار بررسی',
  preparing: 'در حال آماده‌سازی',
  shipped: 'ارسال‌شده',
  delivered: 'تحویل‌شده',
  canceled: 'لغو‌شده',
};

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-700',
  preparing: 'bg-cinnamon/10 text-cinnamon',
  shipped: 'bg-emerald/10 text-emerald',
  delivered: 'bg-emerald text-parchment',
  canceled: 'bg-clay/10 text-clay',
};

const STATUS_OPTIONS = ['pending', 'preparing', 'shipped', 'delivered', 'canceled'];

export default function AdminOrders() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<number | null>(null);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/orders');
    if (res.ok) {
      const data = await res.json();
      setOrders(data.orders);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const changeStatus = async (id: number, status: string) => {
    await fetch(`/api/admin/orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    load();
  };

  if (loading) {
    return <p className="text-sm text-charcoal/50 py-10 text-center">در حال بارگذاری سفارش‌ها...</p>;
  }

  if (orders.length === 0) {
    return <p className="text-sm text-charcoal/40 py-10 text-center">هنوز سفارشی ثبت نشده است</p>;
  }

  return (
    <div className="space-y-2">
      {orders.map((o) => (
        <div key={o.id} className="bg-parchment border border-stone/60 rounded-arch-lg p-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-bold text-charcoal">{o.orderNumber}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${STATUS_COLORS[o.status] || 'bg-stone/20 text-charcoal'}`}>
              {STATUS_LABELS[o.status] || o.status}
            </span>
            <span className="text-xs text-charcoal/60">{o.customerName} — {o.phone}</span>
            <span className="text-xs text-charcoal/40">
              {new Date(o.createdAt * 1000).toLocaleDateString('fa-IR')}
            </span>
            <span className="text-sm font-bold text-emerald mr-auto">{o.total.toLocaleString('fa-IR')} تومان</span>
            <button
              onClick={() => setOpenId(openId === o.id ? null : o.id)}
              className="text-xs bg-emerald/10 text-emerald px-3 py-1.5 rounded-full hover:bg-emerald/20"
            >
              {openId === o.id ? 'بستن' : 'جزئیات'}
            </button>
          </div>

          {openId === o.id && (
            <div className="border-t border-stone/50 mt-3 pt-3 grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold text-charcoal mb-2">اقلام سفارش</h4>
                <ul className="space-y-1.5">
                  {o.items.map((it, i) => (
                    <li key={i} className="text-xs text-charcoal/70 flex justify-between gap-2">
                      <span>{it.productName} ({it.variantLabel}) × {it.quantity.toLocaleString('fa-IR')}</span>
                      <span>{(it.price * it.quantity).toLocaleString('fa-IR')} تومان</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-charcoal/50 mt-2 border-t border-stone/40 pt-2 space-y-1">
                  <div className="flex justify-between"><span>جمع کالاها</span><span>{o.subtotal.toLocaleString('fa-IR')}</span></div>
                  <div className="flex justify-between"><span>ارسال</span><span>{o.shipping === 0 ? 'رایگان' : o.shipping.toLocaleString('fa-IR')}</span></div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-charcoal mb-2">اطلاعات مشتری</h4>
                <p className="text-xs text-charcoal/70 leading-relaxed">
                  {o.province}، {o.city}<br />
                  {o.address}<br />
                  کد پستی: {o.postalCode}<br />
                  {o.notes && <>توضیحات: {o.notes}</>}
                </p>
                <label className="text-xs font-medium text-charcoal/70 mt-3 mb-1 block">تغییر وضعیت سفارش</label>
                <select
                  value={o.status}
                  onChange={(e) => changeStatus(o.id, e.target.value)}
                  className="bg-parchment border border-stone rounded-arch px-3 py-2 text-sm focus:border-emerald focus:outline-none"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

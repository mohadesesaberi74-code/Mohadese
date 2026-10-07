'use client';

import { useState } from 'react';
import AdminProducts from './AdminProducts';
import AdminOrders from './AdminOrders';
import AdminWholesale from './AdminWholesale';

type Tab = 'products' | 'orders' | 'wholesale';

const tabs: { key: Tab; label: string }[] = [
  { key: 'products', label: 'محصولات' },
  { key: 'orders', label: 'سفارش‌ها' },
  { key: 'wholesale', label: 'سفارش عمده' },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState<Tab>('products');

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Top bar */}
      <div className="bg-charcoal text-parchment">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald flex items-center justify-center text-parchment font-bold">ن</div>
            <div>
              <h1 className="text-sm font-bold">پنل مدیریت نوبرانه</h1>
              <p className="text-[11px] text-parchment/60">مدیریت فروشگاه بدون کدنویسی</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank" className="text-xs text-parchment/70 hover:text-parchment border border-parchment/20 rounded-full px-3 py-1.5">
              مشاهده سایت
            </a>
            <button onClick={handleLogout} className="text-xs bg-parchment/10 hover:bg-parchment/20 rounded-full px-3 py-1.5">
              خروج
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`text-sm px-4 py-2.5 rounded-t-lg whitespace-nowrap transition-colors ${tab === t.key ? 'bg-parchment text-charcoal font-bold' : 'text-parchment/70 hover:text-parchment'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {tab === 'products' && <AdminProducts />}
        {tab === 'orders' && <AdminOrders />}
        {tab === 'wholesale' && <AdminWholesale />}
      </div>
    </div>
  );
}

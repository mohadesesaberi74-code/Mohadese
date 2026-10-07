'use client';

import { useEffect, useState } from 'react';

interface WholesaleRequest {
  id: number;
  name: string;
  phone: string;
  product: string;
  quantity: string;
  notes: string;
  status: string;
  createdAt: number;
}

const STATUS_LABELS: Record<string, string> = {
  new: 'جدید',
  contacted: 'تماس گرفته شد',
  done: 'تکمیل‌شده',
};
const STATUS_OPTIONS = ['new', 'contacted', 'done'];

export default function AdminWholesale() {
  const [requests, setRequests] = useState<WholesaleRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/wholesale');
    if (res.ok) {
      const data = await res.json();
      setRequests(data.requests);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const changeStatus = async (id: number, status: string) => {
    await fetch('/api/admin/wholesale', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    load();
  };

  if (loading) {
    return <p className="text-sm text-charcoal/50 py-10 text-center">در حال بارگذاری...</p>;
  }

  if (requests.length === 0) {
    return <p className="text-sm text-charcoal/40 py-10 text-center">هنوز درخواست سفارش عمده‌ای ثبت نشده است</p>;
  }

  return (
    <div className="space-y-2">
      {requests.map((r) => (
        <div key={r.id} className="bg-parchment border border-stone/60 rounded-arch-lg p-4 flex items-center gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <p className="text-sm font-bold text-charcoal">{r.name} — <span className="font-normal text-charcoal/60">{r.phone}</span></p>
            <p className="text-xs text-charcoal/60 mt-1">
              محصول: {r.product || '—'} | مقدار: {r.quantity || '—'}
              {r.notes && <> | توضیحات: {r.notes}</>}
            </p>
          </div>
          <span className="text-xs text-charcoal/40">{new Date(r.createdAt * 1000).toLocaleDateString('fa-IR')}</span>
          <select
            value={r.status}
            onChange={(e) => changeStatus(r.id, e.target.value)}
            className="bg-parchment border border-stone rounded-arch px-3 py-1.5 text-xs focus:border-emerald focus:outline-none"
          >
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{STATUS_LABELS[s]}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

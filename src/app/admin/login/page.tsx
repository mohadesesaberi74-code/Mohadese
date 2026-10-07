'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    const data = await res.json().catch(() => ({ ok: false }));
    setLoading(false);
    if (data.ok) {
      router.replace('/admin');
    } else {
      setError(data.error || 'رمز عبور اشتباه است');
    }
  };

  return (
    <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center text-emerald text-2xl font-bold mx-auto mb-4">ن</div>
          <h1 className="text-xl font-bold text-charcoal mb-1">پنل مدیریت نوبرانه</h1>
          <p className="text-xs text-charcoal/50">این بخش مخصوص مدیر فروشگاه است</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-parchment rounded-arch-lg border border-stone/60 p-6 shadow-soft">
          <label className="text-sm font-medium text-charcoal/70 mb-1.5 block">رمز عبور مدیر</label>
          <input
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
            placeholder="••••••••"
          />
          {error && <p className="text-xs text-clay mt-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 rounded-full text-sm font-bold mt-4 disabled:opacity-60"
          >
            {loading ? 'در حال بررسی...' : 'ورود'}
          </button>
        </form>

        <a href="/" className="block text-center text-xs text-charcoal/40 hover:text-emerald mt-6">بازگشت به فروشگاه</a>
      </div>
    </div>
  );
}

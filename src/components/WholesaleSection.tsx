'use client';

import Link from 'next/link';
import { FlowerIcon, CheckIcon } from './Icons';

const features = [
  'قیمت همکاری',
  'امکان سفارش در حجم بالا',
  'آماده‌سازی سفارش',
  'بسته‌بندی مناسب فروش',
  'امکان سفارش ترکیبی',
];

const productTypes = ['ادویه‌های تک', 'ادویه‌های ترکیبی', 'سبزیجات خشک', 'آرد', 'محصولات ویژه'];

export default function WholesaleSection() {
  return (
    <section className="py-12 md:py-16 bg-charcoal text-parchment relative overflow-hidden pattern-boteh">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-parchment/30" />
              <FlowerIcon size={18} className="text-parchment/50" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">برای همکاران نوبرانه</h2>
            <p className="text-sm md:text-base text-parchment/70 leading-relaxed mb-6">
              اگر فروشگاه، عطاری یا کسب‌وکار مواد غذایی دارید، امکان ثبت سفارش عمده محصولات نوبرانه فراهم است.
            </p>

            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-parchment/90">انواع محصولات</h3>
              <div className="flex flex-wrap gap-2">
                {productTypes.map((t) => (
                  <span key={t} className="text-xs bg-parchment/10 px-3 py-1.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-bold mb-3 text-parchment/90">امکانات</h3>
              <ul className="space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-parchment/80">
                    <CheckIcon size={16} className="text-emerald-light" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/wholesale" className="inline-block bg-parchment text-emerald px-7 py-3 rounded-full text-sm font-bold hover:bg-parchment/90 transition-colors">
              ثبت سفارش عمده
            </Link>
          </div>

          {/* Image */}
          <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1604908554007-3e1c1c2c5e5e?w=800&q=80"
              alt="خرید عمده نوبرانه"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

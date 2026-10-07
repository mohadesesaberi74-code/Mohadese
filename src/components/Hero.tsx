'use client';

import Link from 'next/link';
import { FlowerIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment texture-paper">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-emerald/5 px-4 py-1.5 rounded-full mb-5">
              <FlowerIcon size={16} className="text-emerald" />
              <span className="text-sm text-emerald font-medium">نوبرانه یعنی عطر و طعم واقعی غذا</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
              عطر واقعی غذا،<br />
              از <span className="text-emerald">ادویه خوب</span> شروع می‌شود
            </h1>
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
              ادویه‌ها، سبزیجات خشک، سویق و محصولات خوش‌عطر نوبرانه؛ با انتخابی دقیق برای آشپزی خوش‌طعم‌تر.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link href="/shop" className="btn-primary px-7 py-3 rounded-full text-sm font-semibold text-center">
                مشاهده محصولات
              </Link>
              <Link href="/category/single-spices" className="btn-outline px-7 py-3 rounded-full text-sm font-semibold text-center">
                خرید ادویه‌ها
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-[4/5] md:aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=80"
                alt="سفره ایرانی با ادویه‌های نوبرانه"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -left-3 md:bottom-4 md:left-4 bg-parchment rounded-arch shadow-card px-4 py-3 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald/10 flex items-center justify-center text-xl">🌿</div>
              <div>
                <div className="text-xs font-bold text-emerald">تازه آسیاب‌شده</div>
                <div className="text-[10px] text-charcoal/60">هر روز آماده می‌شود</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

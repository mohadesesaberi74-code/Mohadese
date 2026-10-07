'use client';

import Link from 'next/link';
import { dishInspirations } from '@/data/content';
import { FlowerIcon, ChevronLeft } from './Icons';

export default function FoodInspiration() {
  return (
    <section className="py-12 md:py-16 bg-emerald/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">امروز چی بپزیم؟</h2>
          <p className="text-sm text-charcoal/60 mt-2">با ادویه مناسب، هر غذایی خوش‌طعم‌تر می‌شود</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {dishInspirations.map((dish) => (
            <div key={dish.id} className="group bg-parchment rounded-arch-lg overflow-hidden border border-stone/50 card-lift hover:shadow-card-hover">
              <div className="relative aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <h3 className="absolute bottom-2 right-3 text-parchment font-bold text-sm md:text-base">{dish.name}</h3>
              </div>
              <div className="p-3">
                <p className="text-xs text-charcoal/60 mb-2 line-clamp-1">پیشنهاد: {dish.spiceName}</p>
                <Link
                  href={`/products/${dish.spiceSlug}`}
                  className="flex items-center justify-center gap-1 text-xs text-emerald font-semibold border border-emerald/30 rounded-full py-1.5 hover:bg-emerald hover:text-parchment transition-colors"
                >
                  مشاهده ادویه
                  <ChevronLeft size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

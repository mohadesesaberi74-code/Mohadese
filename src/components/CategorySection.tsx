'use client';

import Link from 'next/link';
import { categories } from '@/data/categories';
import { categoryIcons } from './Icons';
import { FlowerIcon } from './Icons';

export default function CategorySection() {
  return (
    <section className="py-12 md:py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">دسته‌بندی محصولات</h2>
          <p className="text-sm text-charcoal/60 mt-2">آنچه برای آشپزی خوش‌طعم نیاز دارید</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.icon] || categoryIcons.leaf;
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group bg-parchment rounded-arch-lg border border-stone/50 overflow-hidden card-lift hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-parchment/90 flex items-center justify-center text-emerald">
                    <Icon size={22} />
                  </div>
                </div>
                {/* Content */}
                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-bold text-charcoal group-hover:text-emerald transition-colors mb-1">{cat.name}</h3>
                  <p className="text-xs text-charcoal/60 line-clamp-2 leading-relaxed">{cat.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

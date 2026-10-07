'use client';

import { useRef } from 'react';
import type { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from './Icons';

export default function ProductShelf({ title, products, viewAllHref }: { title: string; products: Product[]; viewAllHref?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-charcoal">{title}</h2>
          <div className="flex items-center gap-2">
            {viewAllHref && (
              <a href={viewAllHref} className="text-sm text-emerald hover:text-emerald-dark transition-colors hidden md:inline">مشاهده همه</a>
            )}
            <div className="hidden md:flex items-center gap-1">
              <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-stone text-charcoal hover:bg-emerald hover:text-parchment hover:border-emerald transition-colors flex items-center justify-center" aria-label="قبلی">
                <ChevronRight size={18} />
              </button>
              <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-stone text-charcoal hover:bg-emerald hover:text-parchment hover:border-emerald transition-colors flex items-center justify-center" aria-label="بعدی">
                <ChevronLeft size={18} />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x"
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {viewAllHref && (
          <a href={viewAllHref} className="md:hidden mt-3 inline-block text-sm text-emerald hover:text-emerald-dark">مشاهده همه ←</a>
        )}
      </div>
    </section>
  );
}

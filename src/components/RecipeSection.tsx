'use client';

import Link from 'next/link';
import { recipes } from '@/data/content';
import { getProductBySlug } from '@/data/products';
import { FlowerIcon, ClockIcon, ChevronLeft } from './Icons';

export default function RecipeSection() {
  return (
    <section className="py-12 md:py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">با نوبرانه بپز</h2>
          <p className="text-sm text-charcoal/60 mt-2">دستور پخت غذاهای ایرانی با ادویه نوبرانه</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group bg-parchment rounded-arch-lg overflow-hidden border border-stone/50 card-lift hover:shadow-card-hover">
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-parchment/90 rounded-full px-3 py-1 flex items-center gap-1 text-xs text-charcoal">
                  <ClockIcon size={14} />
                  {recipe.time}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-emerald transition-colors">{recipe.name}</h3>
                <div className="mb-3">
                  <span className="text-xs text-charcoal/50">مواد لازم: </span>
                  <span className="text-xs text-charcoal/70">{recipe.ingredients.join('، ')}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {recipe.recommendedProducts.map((slug) => {
                    const p = getProductBySlug(slug);
                    return p ? (
                      <Link key={slug} href={`/products/${slug}`} className="text-[10px] bg-emerald/8 text-emerald px-2 py-1 rounded-full hover:bg-emerald hover:text-parchment transition-colors">
                        {p.name}
                      </Link>
                    ) : null;
                  })}
                </div>
                <p className="text-xs text-charcoal/60 line-clamp-2 mb-3 leading-relaxed">
                  {recipe.instructions[0]}...
                </p>
                <Link href={`/recipes/${recipe.id}`} className="flex items-center gap-1 text-xs text-emerald font-semibold hover:text-emerald-dark">
                  مشاهده دستور پخت
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

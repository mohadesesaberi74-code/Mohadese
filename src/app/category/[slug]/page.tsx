'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';

const sortOptions = [
  { value: 'popular', label: 'محبوب‌ترین' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'cheapest', label: 'ارزان‌ترین' },
  { value: 'most-expensive', label: 'گران‌ترین' },
];

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  const [sortBy, setSortBy] = useState('popular');

  let products = getProductsByCategory(params.slug);

  const sorted = useMemo(() => {
    const result = [...products];
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case 'cheapest':
        result.sort((a, b) => a.weights[0].price - b.weights[0].price);
        break;
      case 'most-expensive':
        result.sort((a, b) => b.weights[0].price - a.weights[0].price);
        break;
      default:
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    return result;
  }, [sortBy, products]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-2">دسته‌بندی یافت نشد</h1>
          <a href="/categories" className="text-emerald hover:underline">بازگشت به دسته‌بندی‌ها</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-emerald/5 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-charcoal/50 mb-3">
            <a href="/" className="hover:text-emerald">خانه</a>
            <span>/</span>
            <a href="/categories" className="hover:text-emerald">دسته‌بندی‌ها</a>
            <span>/</span>
            <span className="text-charcoal/80">{category.name}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-2">{category.name}</h1>
          <p className="text-sm text-charcoal/60">{category.description}</p>
          {category.examples && (
            <div className="flex flex-wrap gap-2 mt-4">
              {category.examples.map((ex) => (
                <span key={ex} className="text-xs bg-parchment border border-stone/50 px-3 py-1.5 rounded-full text-charcoal/70">{ex}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Sort */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-charcoal/60">{sorted.length.toLocaleString('fa-IR')} محصول</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-parchment border border-stone rounded-full px-4 py-2 text-sm text-charcoal focus:border-emerald focus:outline-none"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-charcoal/50">به‌زودی محصولات این دسته اضافه می‌شوند</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

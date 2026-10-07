'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/categories';
import type { Product } from '@/data/products';
import { SearchIcon } from '@/components/Icons';

const sortOptions = [
  { value: 'popular', label: 'محبوب‌ترین' },
  { value: 'newest', label: 'جدیدترین' },
  { value: 'cheapest', label: 'ارزان‌ترین' },
  { value: 'most-expensive', label: 'گران‌ترین' },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialSort = searchParams.get('sort') || 'popular';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState(initialSort);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((d) => setProducts(d.products || []))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    const sort = searchParams.get('sort');
    if (sort === 'bestseller') setSortBy('popular');
    else if (sort === 'newest') setSortBy('newest');
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...products];

    // Search
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Stock
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Price
    if (priceRange !== 'all') {
      result = result.filter((p) => {
        const price = p.weights[0].price;
        if (priceRange === 'low') return price < 50000;
        if (priceRange === 'mid') return price >= 50000 && price < 150000;
        return price >= 150000;
      });
    }

    // Sort
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
  }, [query, selectedCategory, sortBy, inStockOnly, priceRange]);

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-emerald/5 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">فروشگاه نوبرانه</h1>
          {/* Search bar */}
          <div className="relative max-w-2xl">
            <SearchIcon size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-cinnamon/60" />
            <input
              type="text"
              placeholder="جستجوی محصولات... مثلا: زردچوبه، ادویه مرغ، سبزی قورمه"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-parchment border border-stone rounded-full pr-11 pl-4 py-3 text-sm focus:border-emerald focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-stone/50">
          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-parchment border border-stone rounded-full px-4 py-2 text-sm text-charcoal focus:border-emerald focus:outline-none"
          >
            <option value="all">همه دسته‌ها</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>

          {/* Price filter */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value as 'all' | 'low' | 'mid' | 'high')}
            className="bg-parchment border border-stone rounded-full px-4 py-2 text-sm text-charcoal focus:border-emerald focus:outline-none"
          >
            <option value="all">همه قیمت‌ها</option>
            <option value="low">زیر ۵۰ هزار</option>
            <option value="mid">۵۰ تا ۱۵۰ هزار</option>
            <option value="high">بالای ۱۵۰ هزار</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-parchment border border-stone rounded-full px-4 py-2 text-sm text-charcoal focus:border-emerald focus:outline-none mr-auto"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>

          {/* In stock */}
          <label className="flex items-center gap-2 text-sm text-charcoal/70 cursor-pointer">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="w-4 h-4 accent-emerald"
            />
            فقط موجودها
          </label>
        </div>

        {/* Results count */}
        <p className="text-sm text-charcoal/60 mb-4">
          {loading ? 'در حال بارگذاری محصولات...' : `${filtered.length.toLocaleString('fa-IR')} محصول یافت شد`}
        </p>

        {/* Products grid */}
        {!loading && filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-charcoal/50 mb-2">محصولی یافت نشد</p>
            <p className="text-sm text-charcoal/40">جستجوی خود را تغییر دهید یا فیلترها را تنظیم کنید</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

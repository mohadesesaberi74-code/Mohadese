'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartContext';
import ProductCard from '@/components/ProductCard';
import { HeartIcon } from '@/components/Icons';
import type { Product } from '@/data/products';

export default function FavoritesPage() {
  const { favorites } = useCart();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((d) => setAllProducts(d.products || []))
      .catch(() => setAllProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const favProducts = allProducts.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <HeartIcon size={26} className="text-clay" />
          <h1 className="text-2xl md:text-3xl font-bold text-charcoal">علاقه‌مندی‌ها</h1>
        </div>

        {loading ? (
          <p className="text-sm text-charcoal/40 py-16 text-center">در حال بارگذاری...</p>
        ) : favProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-emerald/8 flex items-center justify-center text-emerald mx-auto mb-4">
              <HeartIcon size={36} />
            </div>
            <p className="text-charcoal/50 mb-2">هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید</p>
            <a href="/shop" className="text-emerald font-semibold hover:underline text-sm">مشاهده محصولات</a>
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {favProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

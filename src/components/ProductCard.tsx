'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { useCart, formatPrice } from './CartContext';
import { HeartIcon, StarIcon, CartIcon, PlusIcon } from './Icons';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(0);
  const fav = isFavorite(product.id);
  const weight = product.weights[selectedWeight];

  return (
    <div className="card-lift group bg-parchment rounded-arch-lg overflow-hidden border border-stone/50 shadow-soft hover:shadow-card-hover flex flex-col w-[200px] md:w-[230px] shrink-0">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-stone/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.discount && (
            <span className="bg-clay text-parchment text-xs font-bold px-2 py-0.5 rounded-full">
              {product.discount}٪ تخفیف
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-emerald text-parchment text-[10px] font-bold px-2 py-0.5 rounded-full">پرفروش</span>
          )}
          {product.newArrival && (
            <span className="bg-cinnamon text-parchment text-[10px] font-bold px-2 py-0.5 rounded-full">جدید</span>
          )}
        </div>
        {/* Favorite */}
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
          className={`absolute top-2 left-2 w-8 h-8 rounded-full bg-parchment/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 ${fav ? 'text-clay' : 'text-charcoal/50'}`}
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <HeartIcon size={18} filled={fav} />
        </button>
      </Link>

      {/* Content */}
      <div className="p-3 flex flex-col flex-1">
        {/* Category */}
        <span className="text-[10px] text-cinnamon/70 mb-0.5">{product.categoryName}</span>
        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-bold text-charcoal mb-1 hover:text-emerald transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        {/* Description */}
        <p className="text-xs text-charcoal/60 line-clamp-2 mb-2 leading-relaxed">{product.shortDescription}</p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <StarIcon size={12} className="text-cinnamon" />
            <span className="text-xs text-charcoal/50">{product.rating.toLocaleString('fa-IR')}</span>
          </div>
        )}

        {/* Weight selector */}
        <div className="flex gap-1 mb-2">
          {product.weights.map((w, i) => (
            <button
              key={w.value}
              onClick={() => setSelectedWeight(i)}
              className={`text-[10px] px-2 py-1 rounded-full border transition-colors ${i === selectedWeight ? 'bg-emerald text-parchment border-emerald' : 'bg-parchment text-charcoal/60 border-stone hover:border-emerald'}`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* Price + Add */}
        <div className="flex items-end justify-between mt-auto pt-1">
          <div className="flex flex-col">
            {product.oldPrice && product.weights[selectedWeight].value === product.weights[0].value && (
              <span className="text-xs text-charcoal/40 line-through">{formatPrice(product.oldPrice)}</span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-sm font-bold text-emerald">{formatPrice(weight.price)}</span>
              <span className="text-[10px] text-charcoal/50">تومان</span>
            </div>
          </div>
          <button
            onClick={() => addToCart(product, weight.value, weight.label, weight.price)}
            className="w-9 h-9 rounded-arch bg-emerald text-parchment flex items-center justify-center hover:bg-emerald-dark transition-colors shrink-0"
            aria-label="افزودن به سبد"
          >
            <PlusIcon size={18} />
          </button>
        </div>

        {/* Stock */}
        {!product.inStock && (
          <span className="text-xs text-clay mt-1">ناموجود</span>
        )}
      </div>
    </div>
  );
}

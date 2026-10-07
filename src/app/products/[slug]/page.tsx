'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart, formatPrice } from '@/components/CartContext';
import { getProductBySlug, products as allProducts } from '@/data/products';
import { HeartIcon, StarIcon, PlusIcon, MinusIcon, CheckIcon, CartIcon, TruckIcon, ShieldIcon } from '@/components/Icons';
import ProductShelf from '@/components/ProductShelf';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const fav = isFavorite(product.id);
  const weight = product.weights[selectedWeight];
  const images = product.images || [product.image];

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const handleAddToCart = () => {
    addToCart(product, weight.value, weight.label, weight.price, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, weight.value, weight.label, weight.price, quantity);
    window.location.href = '/checkout';
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-charcoal/50">
          <Link href="/" className="hover:text-emerald">خانه</Link>
          <span>/</span>
          <Link href={`/category/${product.categorySlug}`} className="hover:text-emerald">{product.categoryName}</Link>
          <span>/</span>
          <span className="text-charcoal/80">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Images */}
          <div>
            <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-square bg-stone/20 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
              {product.discount && (
                <span className="absolute top-4 right-4 bg-clay text-parchment text-sm font-bold px-3 py-1 rounded-full">
                  {product.discount}٪ تخفیف
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded-arch overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-emerald' : 'border-stone'}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-sm text-cinnamon/70 mb-1 block">{product.categoryName}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">{product.name}</h1>

            {/* Rating + Stock */}
            <div className="flex items-center gap-4 mb-4">
              {product.rating && (
                <div className="flex items-center gap-1">
                  <StarIcon size={16} className="text-cinnamon" />
                  <span className="text-sm text-charcoal/60">{product.rating.toLocaleString('fa-IR')}</span>
                </div>
              )}
              <span className={`text-sm flex items-center gap-1 ${product.inStock ? 'text-emerald' : 'text-clay'}`}>
                {product.inStock ? <><CheckIcon size={16} /> موجود</> : 'ناموجود'}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-charcoal/70 leading-relaxed mb-6">{product.description}</p>

            {/* Weight selector */}
            <div className="mb-5">
              <label className="text-sm font-bold text-charcoal mb-2 block">وزن</label>
              <div className="flex gap-2">
                {product.weights.map((w, i) => (
                  <button
                    key={w.value}
                    onClick={() => setSelectedWeight(i)}
                    className={`text-sm px-4 py-2.5 rounded-arch border transition-all ${i === selectedWeight ? 'bg-emerald text-parchment border-emerald' : 'bg-parchment text-charcoal/70 border-stone hover:border-emerald'}`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-2xl font-bold text-emerald">{formatPrice(weight.price * quantity)}</span>
              <span className="text-sm text-charcoal/50">تومان</span>
              {product.oldPrice && selectedWeight === 0 && (
                <span className="text-sm text-charcoal/40 line-through">{formatPrice(product.oldPrice * quantity)}</span>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-5">
              <label className="text-sm font-bold text-charcoal">تعداد</label>
              <div className="flex items-center gap-2 border border-stone rounded-full">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 flex items-center justify-center text-charcoal hover:text-emerald">
                  <MinusIcon size={18} />
                </button>
                <span className="text-sm font-bold w-8 text-center">{quantity.toLocaleString('fa-IR')}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 flex items-center justify-center text-charcoal hover:text-emerald">
                  <PlusIcon size={18} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2"
              >
                {added ? <><CheckIcon size={20} /> اضافه شد</> : <><CartIcon size={20} /> افزودن به سبد</>}
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-cinnamon text-parchment py-3.5 rounded-full text-sm font-bold hover:bg-cinnamonLight transition-colors"
              >
                خرید الآن
              </button>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${fav ? 'border-clay text-clay bg-clay/5' : 'border-stone text-charcoal/50 hover:border-clay'}`}
              >
                <HeartIcon size={22} filled={fav} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 py-4 border-t border-stone/50">
              <div className="flex flex-col items-center gap-1 text-center">
                <TruckIcon size={22} className="text-emerald" />
                <span className="text-xs text-charcoal/60">ارسال سریع</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <ShieldIcon size={22} className="text-emerald" />
                <span className="text-xs text-charcoal/60">ضمانت کیفیت</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <CheckIcon size={22} className="text-emerald" />
                <span className="text-xs text-charcoal/60">بسته‌بندی بهداشتی</span>
              </div>
            </div>

            {/* Extra info */}
            <div className="mt-6 space-y-3">
              {product.suitableFor && (
                <div className="bg-emerald/5 rounded-arch p-4">
                  <h3 className="text-sm font-bold text-emerald mb-2">مناسب برای</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.suitableFor.map((s) => (
                      <span key={s} className="text-xs bg-parchment border border-emerald/20 px-3 py-1.5 rounded-full text-charcoal/70">{s}</span>
                    ))}
                  </div>
                </div>
              )}
              {product.ingredients && (
                <div className="bg-emerald/5 rounded-arch p-4">
                  <h3 className="text-sm font-bold text-emerald mb-2">ترکیبات</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{product.ingredients}</p>
                </div>
              )}
              {product.storageMethod && (
                <div className="bg-emerald/5 rounded-arch p-4">
                  <h3 className="text-sm font-bold text-emerald mb-2">روش نگهداری</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{product.storageMethod}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <ProductShelf title="محصولات مرتبط" products={related} viewAllHref={`/category/${product.categorySlug}`} />
      )}
    </div>
  );
}

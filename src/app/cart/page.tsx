'use client';

import Link from 'next/link';
import { useCart, formatPrice } from '@/components/CartContext';
import { TrashIcon, PlusIcon, MinusIcon, CartIcon } from '@/components/Icons';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-emerald/8 flex items-center justify-center text-emerald mx-auto mb-4">
            <CartIcon size={36} />
          </div>
          <h1 className="text-xl font-bold text-charcoal mb-2">سبد خرید شما خالی است</h1>
          <p className="text-sm text-charcoal/60 mb-6">هنوز محصولی به سبد اضافه نکرده‌اید</p>
          <Link href="/shop" className="btn-primary px-7 py-3 rounded-full text-sm font-semibold inline-block">
            مشاهده محصولات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">سبد خرید</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Items */}
          <div className="md:col-span-2 space-y-3">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.weight}`} className="bg-parchment rounded-arch-lg border border-stone/50 p-3 md:p-4 flex gap-3 md:gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Link href={`/products/${item.product.slug}`} className="shrink-0">
                  <img src={item.product.image} alt={item.product.name} className="w-20 h-20 md:w-24 md:h-24 rounded-arch object-cover" />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link href={`/products/${item.product.slug}`}>
                    <h3 className="text-sm font-bold text-charcoal hover:text-emerald transition-colors">{item.product.name}</h3>
                  </Link>
                  <span className="text-xs text-charcoal/50 block mt-0.5">وزن: {item.weightLabel}</span>
                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity */}
                    <div className="flex items-center gap-1 border border-stone rounded-full">
                      <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-charcoal hover:text-emerald">
                        <MinusIcon size={16} />
                      </button>
                      <span className="text-xs font-bold w-6 text-center">{item.quantity.toLocaleString('fa-IR')}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.weight, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-charcoal hover:text-emerald">
                        <PlusIcon size={16} />
                      </button>
                    </div>
                    {/* Price */}
                    <span className="text-sm font-bold text-emerald">{formatPrice(item.price * item.quantity)} تومان</span>
                  </div>
                </div>
                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.product.id, item.weight)}
                  className="w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-clay transition-colors shrink-0"
                  aria-label="حذف"
                >
                  <TrashIcon size={18} />
                </button>
              </div>
            ))}

            <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-emerald font-semibold hover:text-emerald-dark mt-2">
              ادامه خرید
            </Link>
          </div>

          {/* Summary */}
          <div className="md:col-span-1">
            <div className="bg-parchment rounded-arch-lg border border-stone/50 p-5 sticky top-24">
              <h2 className="text-base font-bold text-charcoal mb-4">خلاصه سفارش</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-charcoal/70">
                  <span>تعداد اقلام</span>
                  <span>{items.reduce((s, i) => s + i.quantity, 0).toLocaleString('fa-IR')}</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>مجموع</span>
                  <span>{formatPrice(cartTotal)} تومان</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>هزینه ارسال</span>
                  <span className="text-emerald">{cartTotal >= 500000 ? 'رایگان' : 'پرداخت در محل'}</span>
                </div>
              </div>
              <div className="border-t border-stone/50 mt-4 pt-4 flex justify-between items-baseline">
                <span className="text-sm font-bold text-charcoal">مجموع کل</span>
                <span className="text-lg font-bold text-emerald">{formatPrice(cartTotal)} <span className="text-xs font-normal">تومان</span></span>
              </div>
              <Link href="/checkout" className="block btn-primary text-center py-3.5 rounded-full text-sm font-bold mt-5">
                ثبت سفارش
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

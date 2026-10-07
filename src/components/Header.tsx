'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartContext';
import { SearchIcon, CartIcon, UserIcon, HeartIcon, MenuIcon, CloseIcon } from './Icons';

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/shop', label: 'فروشگاه' },
  { href: '/categories', label: 'دسته‌بندی‌ها' },
  { href: '/category/single-spices', label: 'ادویه‌ها' },
  { href: '/category/dried-herbs', label: 'سبزیجات خشک' },
  { href: '/category/sooqh', label: 'سویق' },
  { href: '/category/tea-infusions', label: 'دمنوش و چای' },
  { href: '/category/special-products', label: 'محصولات ویژه' },
  { href: '/about', label: 'درباره نوبرانه' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount, favorites } = useCart();
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 bg-parchment/90 backdrop-blur-md border-b border-stone/60">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Top bar */}
          <div className="hidden md:flex items-center justify-center gap-2 py-1.5 text-xs text-cinnamon">
            <span>🚚 ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان</span>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between gap-4 py-3 md:py-4">
            {/* Right: Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-arch bg-emerald flex items-center justify-center text-parchment font-bold text-lg">
                ن
              </div>
              <div className="hidden sm:block">
                <div className="text-emerald font-bold text-lg leading-tight">نوبرانه</div>
                <div className="text-cinnamon text-[10px] tracking-widest">NOBARANEH</div>
              </div>
            </Link>

            {/* Center: Search (desktop) */}
            <div className="hidden md:flex flex-1 max-w-xl mx-4">
              <div className="relative w-full">
                <SearchIcon size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-cinnamon/60" />
                <input
                  type="text"
                  placeholder="جستجوی محصولات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
                    }
                  }}
                  className="w-full bg-parchment border border-stone rounded-full pr-10 pl-4 py-2.5 text-sm text-charcoal placeholder-cinnamon/50 focus:border-emerald focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Left: Icons */}
            <div className="flex items-center gap-1 md:gap-2 shrink-0">
              {/* Mobile search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal hover:text-emerald transition-colors"
                aria-label="جستجو"
              >
                <SearchIcon size={22} />
              </button>

              <Link href="/favorites" className="hidden md:flex w-10 h-10 items-center justify-center text-charcoal hover:text-emerald transition-colors relative" aria-label="علاقه‌مندی‌ها">
                <HeartIcon size={22} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -left-1 w-4 h-4 bg-clay text-parchment text-[10px] rounded-full flex items-center justify-center">{favorites.length}</span>
                )}
              </Link>

              <Link href="/account" className="hidden md:flex w-10 h-10 items-center justify-center text-charcoal hover:text-emerald transition-colors" aria-label="حساب کاربری">
                <UserIcon size={22} />
              </Link>

              <Link href="/cart" className="w-10 h-10 flex items-center justify-center text-charcoal hover:text-emerald transition-colors relative" aria-label="سبد خرید">
                <CartIcon size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-emerald text-parchment text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal"
                aria-label="منو"
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>

          {/* Navigation (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-6 py-2.5 border-t border-stone/40">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-emerald ${pathname === link.href ? 'text-emerald font-semibold' : 'text-charcoal/80'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3 border-t border-stone/40">
            <div className="relative">
              <SearchIcon size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-cinnamon/60" />
              <input
                type="text"
                placeholder="جستجوی محصولات..."
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
                className="w-full bg-parchment border border-stone rounded-full pr-10 pl-4 py-2.5 text-sm focus:border-emerald focus:outline-none"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-parchment shadow-2xl flex flex-col animate-slide-up">
            <div className="flex items-center justify-between p-4 border-b border-stone/60">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-arch bg-emerald flex items-center justify-center text-parchment font-bold">ن</div>
                <span className="text-emerald font-bold">نوبرانه</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-charcoal">
                <CloseIcon size={24} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3.5 text-base border-b border-stone/30 transition-colors hover:bg-emerald/5 ${pathname === link.href ? 'text-emerald font-semibold' : 'text-charcoal'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/favorites" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3.5 text-base border-b border-stone/30 text-charcoal hover:bg-emerald/5">
                علاقه‌مندی‌ها ({favorites.length})
              </Link>
              <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3.5 text-base border-b border-stone/30 text-charcoal hover:bg-emerald/5">
                حساب کاربری
              </Link>
              <Link href="/wholesale" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3.5 text-base border-b border-stone/30 text-emerald font-semibold hover:bg-emerald/5">
                خرید عمده و همکاری
              </Link>
              <Link href="/custom-blend" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3.5 text-base border-b border-stone/30 text-emerald font-semibold hover:bg-emerald/5">
                ترکیب سفارشی ادویه
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

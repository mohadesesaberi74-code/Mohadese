'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartContext';
import { HomeIcon, GridIcon, SearchIcon, CartIcon, UserIcon } from './Icons';

const items = [
  { href: '/', label: 'خانه', icon: HomeIcon },
  { href: '/categories', label: 'دسته‌بندی', icon: GridIcon },
  { href: '/shop', label: 'جستجو', icon: SearchIcon },
  { href: '/cart', label: 'سبد خرید', icon: CartIcon },
  { href: '/account', label: 'حساب من', icon: UserIcon },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-md border-t border-stone/60">
      <div className="flex items-stretch justify-around px-2 py-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-arch transition-colors min-w-[56px] ${active ? 'text-emerald' : 'text-charcoal/60'}`}
            >
              <div className="relative">
                <Icon size={22} />
                {item.href === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-1.5 -left-2 w-4 h-4 bg-emerald text-parchment text-[9px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </div>
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

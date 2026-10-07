import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  title: 'نوبرانه | عطر واقعی غذا',
  description: 'ادویه‌ها، سبزیجات خشک، سویق و محصولات خوش‌عطر نوبرانه؛ با انتخابی دقیق برای آشپزی خوش‌طعم‌تر.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-parchment text-charcoal min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}

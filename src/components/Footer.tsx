'use client';

import Link from 'next/link';
import { InstagramIcon, PhoneIcon, MapPinIcon, MailIcon, FlowerIcon } from './Icons';

const footerLinks = [
  { href: '/shop', label: 'فروشگاه' },
  { href: '/categories', label: 'دسته‌بندی‌ها' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
  { href: '/faq', label: 'سؤالات متداول' },
  { href: '/terms', label: 'شرایط خرید' },
  { href: '/rules', label: 'قوانین و مقررات' },
  { href: '/track-order', label: 'پیگیری سفارش' },
];

export default function Footer() {
  return (
    <footer className="bg-emerald text-parchment mt-16 pattern-boteh">
      {/* Trust bar */}
      <div className="border-b border-parchment/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: '🌿', title: 'ادویه تازه', desc: 'آسیاب‌شده روزانه' },
            { icon: '📦', title: 'بسته‌بندی بهداشتی', desc: 'تمیز و دربسته' },
            { icon: '🚚', title: 'ارسال سریع', desc: 'به سراسر ایران' },
            { icon: '✅', title: 'کیفیت تضمینی', desc: 'ضمانت بازگشت' },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-semibold">{item.title}</span>
              <span className="text-xs text-parchment/70">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-arch bg-parchment/10 flex items-center justify-center text-parchment font-bold text-lg">ن</div>
              <div>
                <div className="font-bold text-lg">نوبرانه</div>
                <div className="text-xs text-parchment/60 tracking-widest">NOBARANEH</div>
              </div>
            </div>
            <p className="text-sm text-parchment/80 leading-relaxed mb-4">تجربه طعم واقعی</p>
            <p className="text-xs text-parchment/60 leading-relaxed">
              ادویه‌ها، سبزیجات خشک، سویق و محصولات خوش‌عطر نوبرانه؛ با انتخابی دقیق برای آشپزی خوش‌طعم‌تر.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-parchment/90">دسترسی سریع</h3>
            <ul className="space-y-2.5">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-parchment/70 hover:text-parchment transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 text-parchment/90">راهنما</h3>
            <ul className="space-y-2.5">
              {footerLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-parchment/70 hover:text-parchment transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/wholesale" className="text-sm text-parchment/70 hover:text-parchment transition-colors">خرید عمده</Link>
              </li>
              <li>
                <Link href="/custom-blend" className="text-sm text-parchment/70 hover:text-parchment transition-colors">ترکیب سفارشی</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-parchment/90">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-parchment/70">
                <PhoneIcon size={18} />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-parchment/70">
                <MailIcon size={18} />
                <span>info@nobaraneh.ir</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-parchment/70">
                <MapPinIcon size={18} className="mt-0.5 shrink-0" />
                <span>تهران، بازار بزرگ، راسته ادویه‌فروشان</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-parchment/10 flex items-center justify-center hover:bg-parchment/20 transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-parchment/10 flex items-center justify-center hover:bg-parchment/20 transition-colors text-xs font-bold" aria-label="Eitaa">
                ایطا
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-parchment/10 flex items-center justify-center hover:bg-parchment/20 transition-colors text-xs font-bold" aria-label="Bale">
                بله
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-parchment/15" />
          <FlowerIcon size={20} className="text-parchment/30" />
          <div className="flex-1 h-px bg-parchment/15" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-parchment/50">
          <p>© ۱۴۰۳ نوبرانه. تمامی حقوق محفوظ است.</p>
          <p>طراحی شده با عشق برای طعم واقعی غذا</p>
        </div>
      </div>
    </footer>
  );
}

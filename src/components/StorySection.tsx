'use client';

import Link from 'next/link';
import { FlowerIcon } from './Icons';

export default function StorySection() {
  return (
    <section className="py-12 md:py-16 bg-parchment texture-paper">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 relative">
            <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1515449570631-5c08f1c3b6c3?w=800&q=80"
                alt="داستان نوبرانه"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-stone-dark" />
              <FlowerIcon size={18} className="text-emerald" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">نوبرانه فقط یک فروشگاه نیست</h2>
            <div className="space-y-4 text-sm md:text-base text-charcoal/70 leading-relaxed">
              <p>
                نوبرانه با هدف ارائه ادویه و محصولات غذایی واقعی و باکیفیت شکل گرفت. ما با دقت مواد اولیه را انتخاب می‌کنیم و به تمیزی و کیفیت اهمیت می‌دهیم.
              </p>
              <p>
                ادویه‌های ما تازه آسیاب می‌شوند تا عطر و طعم واقعی خود را حفظ کنند. ترکیب‌های ما کاربردی هستند؛ یعنی برای غذاهایی که واقعاً در آشپزخانه ایرانی پخته می‌شوند طراحی شده‌اند.
              </p>
              <p>
                هدف ما این است که محصولی ارائه کنیم که واقعاً در آشپزی استفاده شود و تفاوت طعم را حس کنید.
              </p>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 mt-6 text-sm text-emerald font-semibold hover:text-emerald-dark transition-colors">
              بیشتر بدانید
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

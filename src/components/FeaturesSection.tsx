'use client';

import { LeafIcon, SunIcon, MortarIcon, GlobeIcon, FlowerIcon } from './Icons';

const features = [
  { icon: LeafIcon, title: 'انتخاب از مزارع معتبر', desc: 'با دقت از کشاورزان مورد اعتماد انتخاب می‌شود' },
  { icon: SunIcon, title: 'خشک‌شده در آفتاب', desc: 'برای حفظ حداکثری عطر و طعم' },
  { icon: MortarIcon, title: 'تمیز و درجه‌بندی‌شده', desc: 'با دقت پاک‌سازی و کنترل کیفیت' },
  { icon: GlobeIcon, title: 'تحویل به آشپزخانه‌ها', desc: 'ارسال به بیش از ۵۰ شهر ایران' },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 bg-parchment texture-paper">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-arch-xl overflow-hidden shadow-card aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd05e6?w=800&q=80"
              alt="ادویه‌های نوبرانه"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text + Features */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-stone-dark" />
              <FlowerIcon size={18} className="text-emerald" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-forest">بیشتر از یک ادویه</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-clay">داستانی در هر دانه</h3>

            <div className="space-y-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald/8 flex items-center justify-center text-emerald shrink-0 border border-emerald/15">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-0.5">{f.title}</h4>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

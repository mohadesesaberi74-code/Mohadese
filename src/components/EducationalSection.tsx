'use client';

import { educationalCards } from '@/data/content';
import { FlowerIcon, ClockIcon } from './Icons';

const iconMap: Record<string, typeof ClockIcon> = {
  storage: ClockIcon, clock: ClockIcon, fresh: ClockIcon, herb: ClockIcon, spoon: ClockIcon, cook: ClockIcon, identify: ClockIcon,
};

export default function EducationalSection() {
  return (
    <section className="py-12 md:py-16 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">یک لقمه دانستنی</h2>
          <p className="text-sm text-charcoal/60 mt-2">نکته‌های کوتاه برای آشپزی بهتر</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {educationalCards.map((card) => {
            const Icon = iconMap[card.icon] || ClockIcon;
            return (
              <div key={card.id} className="bg-parchment rounded-arch-lg border border-stone/50 p-5 card-lift hover:shadow-card-hover">
                <div className="w-10 h-10 rounded-full bg-emerald/8 flex items-center justify-center text-emerald mb-3 border border-emerald/15">
                  <Icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-charcoal mb-2">{card.title}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed">{card.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

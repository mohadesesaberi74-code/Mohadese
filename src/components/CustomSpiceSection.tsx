'use client';

import { useState } from 'react';
import { FlowerIcon, CheckIcon } from './Icons';

const ingredients = [
  'زردچوبه', 'فلفل سیاه', 'فلفل قرمز', 'دارچین', 'زنجبیل', 'هل', 'زیره', 'سماق', 'پاپریکا', 'آویشن', 'سیاهدانه', 'تخم گشنیز', 'گلپر', 'نعناع خشک', 'سیر خشک', 'پیاز خشک',
];

const intensities = [
  { label: 'ملایم', value: 'mild' },
  { label: 'متعادل', value: 'medium' },
  { label: 'تند', value: 'hot' },
];

const weights = [
  { label: '۱۰۰ گرم', value: '100g' },
  { label: '۲۵۰ گرم', value: '250g' },
  { label: '۵۰۰ گرم', value: '500g' },
];

export default function CustomSpiceSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [intensity, setIntensity] = useState('medium');
  const [weight, setWeight] = useState('100g');
  const [instructions, setInstructions] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggle = (ing: string) => {
    setSelected((prev) => (prev.includes(ing) ? prev.filter((i) => i !== ing) : [...prev, ing]));
  };

  return (
    <section className="py-12 md:py-16 bg-emerald/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">ادویه‌ات رو خودت انتخاب کن</h2>
          <p className="text-sm text-charcoal/60 mt-2 max-w-xl mx-auto">
            ترکیب ادویه موردنظرت رو بگو؛ نوبرانه بر اساس انتخابت آماده می‌کنه.
          </p>
        </div>

        <div className="bg-parchment rounded-arch-xl border border-stone/50 p-5 md:p-8 shadow-soft max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mx-auto mb-4">
                <CheckIcon size={32} />
              </div>
              <h3 className="text-lg font-bold text-emerald mb-2">ترکیب شما ثبت شد!</h3>
              <p className="text-sm text-charcoal/60 mb-4">به زودی با شما تماس می‌گیریم تا جزئیات سفارش را نهایی کنیم.</p>
              <button onClick={() => { setSubmitted(false); setSelected([]); setInstructions(''); }} className="btn-outline px-6 py-2.5 rounded-full text-sm font-semibold">
                ثبت ترکیب جدید
              </button>
            </div>
          ) : (
            <>
              {/* Ingredients */}
              <div className="mb-6">
                <label className="text-sm font-bold text-charcoal mb-3 block">مواد اولیه را انتخاب کنید</label>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ing) => (
                    <button
                      key={ing}
                      onClick={() => toggle(ing)}
                      className={`text-xs px-3 py-2 rounded-full border transition-all ${selected.includes(ing) ? 'bg-emerald text-parchment border-emerald' : 'bg-parchment text-charcoal/70 border-stone hover:border-emerald'}`}
                    >
                      {ing}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity */}
              <div className="mb-6">
                <label className="text-sm font-bold text-charcoal mb-3 block">شدت طعم</label>
                <div className="flex gap-2">
                  {intensities.map((int) => (
                    <button
                      key={int.value}
                      onClick={() => setIntensity(int.value)}
                      className={`flex-1 text-sm py-2.5 rounded-arch border transition-all ${intensity === int.value ? 'bg-emerald text-parchment border-emerald' : 'bg-parchment text-charcoal/70 border-stone hover:border-emerald'}`}
                    >
                      {int.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight */}
              <div className="mb-6">
                <label className="text-sm font-bold text-charcoal mb-3 block">وزن</label>
                <div className="flex gap-2">
                  {weights.map((w) => (
                    <button
                      key={w.value}
                      onClick={() => setWeight(w.value)}
                      className={`flex-1 text-sm py-2.5 rounded-arch border transition-all ${weight === w.value ? 'bg-emerald text-parchment border-emerald' : 'bg-parchment text-charcoal/70 border-stone hover:border-emerald'}`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <label className="text-sm font-bold text-charcoal mb-2 block">توضیحات ویژه</label>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="مثال: فلفل کمتر، نمک نداشته باشد، زیره بیشتر..."
                  rows={3}
                  className="w-full bg-parchment border border-stone rounded-arch p-3 text-sm focus:border-emerald focus:outline-none resize-none"
                />
              </div>

              <button
                onClick={() => selected.length > 0 && setSubmitted(true)}
                disabled={selected.length === 0}
                className="w-full btn-primary py-3 rounded-full text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ثبت ترکیب سفارشی
              </button>
              {selected.length === 0 && (
                <p className="text-xs text-charcoal/40 text-center mt-2">حداقل یک ماده اولیه انتخاب کنید</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

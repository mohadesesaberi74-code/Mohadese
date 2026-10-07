import { FlowerIcon } from '@/components/Icons';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="bg-emerald/5 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-stone-dark" />
            <FlowerIcon size={20} className="text-emerald" />
            <div className="h-px w-12 bg-stone-dark" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-charcoal mb-4">درباره نوبرانه</h1>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            نوبرانه با عشق به طعم واقعی غذا و اصالت ایرانی شکل گرفت.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-12 space-y-6">
        <div className="prose prose-sm max-w-none">
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            ما در نوبرانه باور داریم که طعم خوب غذا از ادویه خوب شروع می‌شود. به همین دلیل، مواد اولیه را با دقت از مزارع و تولیدکنندگان معتبر انتخاب می‌کنیم و به تمیزی و کیفیت اهمیت می‌دهیم.
          </p>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            ادویه‌های ما تازه آسیاب می‌شوند تا عطر و طعم واقعی خود را حفظ کنند. ترکیب‌های ما کاربردی هستند؛ یعنی برای غذاهایی که واقعاً در آشپزخانه ایرانی پخته می‌شوند طراحی شده‌اند.
          </p>
          <p className="text-sm md:text-base text-charcoal/70 leading-relaxed">
            هدف ما این است که محصولی ارائه کنیم که واقعاً در آشپزی استفاده شود و تفاوت طعم را حس کنید. بدون ادعای اغراق‌آمیز، فقط با تلاش برای ارائه بهترین.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {[
            { title: 'انتخاب دقیق', desc: 'مواد اولیه از منابع معتبر انتخاب می‌شوند' },
            { title: 'تازه‌آماده‌سازی', desc: 'ادویه‌ها پس از سفارش آسیاب می‌شوند' },
            { title: 'ترکیب‌های کاربردی', desc: 'برای غذاهای واقعی ایرانی طراحی شده‌اند' },
          ].map((item) => (
            <div key={item.title} className="bg-parchment rounded-arch-lg border border-stone/50 p-5 text-center">
              <h3 className="text-sm font-bold text-emerald mb-2">{item.title}</h3>
              <p className="text-xs text-charcoal/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

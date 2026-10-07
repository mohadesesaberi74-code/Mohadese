import { UserIcon } from '@/components/Icons';

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-2xl mx-auto px-4 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
            <UserIcon size={26} />
          </div>
          <h1 className="text-2xl font-bold text-charcoal">حساب من</h1>
        </div>

        <div className="bg-parchment rounded-arch-lg border border-stone/50 p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center text-emerald mx-auto mb-3 text-2xl font-bold">ن</div>
            <p className="text-sm text-charcoal/60">برای ورود یا ثبت‌نام، شماره موبایل خود را وارد کنید</p>
          </div>
          <div className="space-y-4 max-w-sm mx-auto">
            <input
              type="tel"
              placeholder="شماره موبایل"
              className="w-full bg-parchment border border-stone rounded-arch px-4 py-3 text-sm text-center focus:border-emerald focus:outline-none"
            />
            <button className="w-full btn-primary py-3.5 rounded-full text-sm font-bold">ارسال کد تأیید</button>
            <p className="text-xs text-charcoal/40 text-center">با ورود، شرایط و قوانین نوبرانه را می‌پذیرید</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {[
            { label: 'سفارش‌های من', href: '/track-order', icon: '📦' },
            { label: 'علاقه‌مندی‌ها', href: '/favorites', icon: '❤️' },
            { label: 'آدرس‌های من', href: '/account', icon: '📍' },
            { label: 'تنظیمات', href: '/account', icon: '⚙️' },
          ].map((item) => (
            <a key={item.label} href={item.href} className="bg-parchment rounded-arch border border-stone/50 p-4 text-center hover:border-emerald transition-colors">
              <div className="text-2xl mb-1">{item.icon}</div>
              <span className="text-xs text-charcoal/70">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

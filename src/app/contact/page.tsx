import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/Icons';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">تماس با ما</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-parchment rounded-arch-lg border border-stone/50 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <PhoneIcon size={22} className="text-emerald" />
              <div>
                <p className="text-sm font-bold text-charcoal">تلفن</p>
                <p className="text-sm text-charcoal/60">۰۲۱-۱۲۳۴۵۶۷۸</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MailIcon size={22} className="text-emerald" />
              <div>
                <p className="text-sm font-bold text-charcoal">ایمیل</p>
                <p className="text-sm text-charcoal/60">info@nobaraneh.ir</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPinIcon size={22} className="text-emerald mt-0.5" />
              <div>
                <p className="text-sm font-bold text-charcoal">آدرس</p>
                <p className="text-sm text-charcoal/60">تهران، بازار بزرگ، راسته ادویه‌فروشان</p>
              </div>
            </div>
          </div>
          <form className="bg-parchment rounded-arch-lg border border-stone/50 p-6 space-y-4">
            <h2 className="text-sm font-bold text-charcoal">پیام بگذارید</h2>
            <input type="text" placeholder="نام" className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none" />
            <input type="email" placeholder="ایمیل" className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none" />
            <textarea placeholder="پیام شما" rows={4} className="w-full bg-parchment border border-stone rounded-arch px-4 py-2.5 text-sm focus:border-emerald focus:outline-none resize-none" />
            <button type="submit" className="w-full btn-primary py-3 rounded-full text-sm font-bold">ارسال پیام</button>
          </form>
        </div>
      </div>
    </div>
  );
}

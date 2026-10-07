export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-2xl mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">پیگیری سفارش</h1>
        <div className="bg-parchment rounded-arch-lg border border-stone/50 p-6">
          <p className="text-sm text-charcoal/60 mb-4">کد پیگیری سفارش خود را وارد کنید</p>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="مثال: NB-۱۲۳۴۵"
              className="flex-1 bg-parchment border border-stone rounded-arch px-4 py-3 text-sm focus:border-emerald focus:outline-none"
            />
            <button className="btn-primary px-6 py-3 rounded-arch text-sm font-bold">پیگیری</button>
          </div>
          <p className="text-xs text-charcoal/40 mt-3">کد پیگیری در پیامک تأیید سفارش به شما ارسال شده است.</p>
        </div>
      </div>
    </div>
  );
}

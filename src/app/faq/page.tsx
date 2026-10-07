const faqs = [
  { q: 'چطور سفارش ثبت کنم؟', a: 'محصول موردنظر را انتخاب کرده، به سبد خرید اضافه کنید و سپس به صفحه تکمیل سفارش بروید و اطلاعات تحویل را وارد کنید.' },
  { q: 'هزینه ارسال چقدر است؟', a: 'ارسال برای سفارش‌های بالای ۵۰۰ هزار تومان رایگان است. برای سفارش‌های کمتر، هزینه ارسال بر اساس مقصد محاسبه می‌شود.' },
  { q: 'چقدر طول می‌کشد تا سفارشم برسد؟', a: 'در تهران معمولاً ۱ تا ۲ روز کاری و در سایر شهرها ۲ تا ۴ روز کاری زمان می‌برد.' },
  { q: 'آیا می‌توانم سفارش عمده ثبت کنم؟', a: 'بله، از صفحه خرید عمده می‌توانید درخواست همکاری و سفارش عمده ثبت کنید.' },
  { q: 'ترکیب سفارشی ادویه چطور کار می‌کند؟', a: 'از صفحه ترکیب سفارشی، مواد اولیه، شدت طعم و وزن موردنظر را انتخاب کنید و توضیحات بنویسید. ما ترکیب شما را آماده می‌کنیم.' },
  { q: 'محصولات نوبرانه چطور نگهداری می‌شوند؟', a: 'ادویه‌ها را در ظرف دربسته، دور از نور و رطوبت نگهداری کنید. سبزیجات خشک نیز در جای خشک و خنک نگهداری شوند.' },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-parchment">
      <div className="max-w-3xl mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-6">سؤالات متداول</h1>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-parchment rounded-arch-lg border border-stone/50 p-4 group">
              <summary className="text-sm font-bold text-charcoal cursor-pointer flex items-center justify-between">
                {faq.q}
                <span className="text-emerald group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="text-sm text-charcoal/60 leading-relaxed mt-3">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

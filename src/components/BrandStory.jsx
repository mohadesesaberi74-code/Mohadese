export default function BrandStory() {
  return (
    <section className="section story" id="story">
      <div className="container story-grid">
        <div className="story-copy" data-reveal>
          <span className="eyebrow">داستان نوبرانه</span>
          <h2>طعم خوب، از کیفیت شروع می‌شود.</h2>
          <p>
            «در نوبرانه تلاش می‌کنیم مواد اولیه باکیفیت را انتخاب کنیم و با دقت آماده‌سازی کنیم تا
            ادویه‌هایی خوش‌عطر و مناسب آشپزی روزمره شما ارائه دهیم.»
          </p>
          <a className="btn btn-copper" href="#why">بیشتر درباره نوبرانه</a>
        </div>
        <div className="story-media" data-reveal>
          <img src="/images/story.jpg" alt="ادویه‌های ایرانی تازه" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

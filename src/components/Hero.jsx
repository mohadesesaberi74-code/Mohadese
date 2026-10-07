export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-media" data-reveal>
          <div className="hero-photo-wrap">
            <img
              src="/images/hero.jpg"
              alt="پلو زعفرانی با مرغ و زرشک — غذای اصیل ایرانی"
              loading="eager"
            />
          </div>
          <span className="hero-glow" aria-hidden="true" />
        </div>

        <div className="hero-copy" data-reveal>
          <h1>نوبرانه</h1>
          <p className="hero-slogan">تجربه طعم واقعی</p>
          <p className="hero-lead">«عطر و طعم واقعی، از انتخاب مواد اولیه خوب شروع می‌شود.»</p>
          <div className="hero-actions">
            <a className="btn btn-gold" href="#products">مشاهده محصولات</a>
            <a className="btn btn-outline" href="#story">درباره نوبرانه</a>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#categories" aria-label="اسکرول به پایین">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}

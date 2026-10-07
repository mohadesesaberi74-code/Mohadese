import { INSTA_IMAGES } from '../data/site.js'

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export default function InstaGrid() {
  return (
    <section className="section insta">
      <div className="container">
        <div className="section-heading" data-reveal>
          <h2>نوبرانه را دنبال کنید</h2>
          <p>«از محصولات و طعم‌های تازه نوبرانه باخبر شوید.»</p>
        </div>
        <div className="insta-grid" data-reveal>
          {INSTA_IMAGES.map((src, i) => (
            <a className="insta-item" href="#" key={i} aria-label="اینستاگرام نوبرانه">
              <img src={src} alt="تصویر اینستاگرام نوبرانه" loading="lazy" />
              <span className="insta-overlay"><InstaIcon /></span>
            </a>
          ))}
        </div>
        <div className="center" data-reveal>
          <a className="btn btn-outline-copper" href="#">
            <InstaIcon />
            ما را در اینستاگرام دنبال کنید
          </a>
        </div>
      </div>
    </section>
  )
}

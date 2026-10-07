import { BRAND, FOOTER_COLUMNS } from '../data/site.js'

const SocialIcon = ({ children, label }) => (
  <a className="social-btn" href="#" aria-label={label}>
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>{BRAND.name}</h2>
          <p className="footer-slogan">«{BRAND.slogan}»</p>
          <div className="footer-social">
            <SocialIcon label="اینستاگرام">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon label="تلگرام">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <path d="M21 4 3 11.5l5.5 1.8L21 4zM8.5 13.3V19l3.4-3.7M21 4l-3.2 15-9.3-5.7" />
              </svg>
            </SocialIcon>
            <SocialIcon label="واتس‌اپ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l1.3-3.8A8 8 0 1 1 8.4 19L4 20z" />
                <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .5c-1-.5-1.5-1-2-2l.5-1-1-2L9 9.5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <nav className="footer-col" key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© ۱۴۰۴ نوبرانه — تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

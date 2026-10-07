import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../data/site.js'

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 20.5C7 16.5 3.5 13.2 3.5 9.4 3.5 6.7 5.6 4.5 8.2 4.5c1.5 0 3 .8 3.8 2.1C12.8 5.3 14.3 4.5 15.8 4.5c2.6 0 4.7 2.2 4.7 4.9 0 3.8-3.5 7.1-8.5 11.1z" />
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" />
    <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
  </svg>
)

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
    {open ? (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </>
    ) : (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    )}
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="logo" href="#">
          <span className="logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 20c-4.4-1.2-7.2-4.6-7.2-9 0-4 2.8-7.4 7.2-8.8 4.4 1.4 7.2 4.8 7.2 8.8 0 4.4-2.8 7.8-7.2 9z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path d="M12 4.5V19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          {BRAND.name}
        </a>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`} aria-label="ناوبری اصلی">
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="جستجو" type="button">
            <SearchIcon />
          </button>
          <button className="icon-btn" aria-label="علاقه‌مندی‌ها" type="button">
            <HeartIcon />
          </button>
          <button className="icon-btn cart-btn" aria-label="سبد خرید" type="button">
            <CartIcon />
          </button>
          <button
            className="icon-btn menu-btn"
            aria-label="منو"
            aria-expanded={menuOpen}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>
    </header>
  )
}

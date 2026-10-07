import { useState } from 'react'

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
    <path d="M12 20.5C7 16.5 3.5 13.2 3.5 9.4 3.5 6.7 5.6 4.5 8.2 4.5c1.5 0 3 .8 3.8 2.1C12.8 5.3 14.3 4.5 15.8 4.5c2.6 0 4.7 2.2 4.7 4.9 0 3.8-3.5 7.1-8.5 11.1z" />
  </svg>
)

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8h14l-1.2 10.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8z" />
    <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
  </svg>
)

// کارت محصول — داده‌ها در src/data/site.js و به‌راحتی قابل جایگزینی با دادهٔ واقعی
export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="product-card" data-reveal>
      <button
        type="button"
        className={`wishlist-btn${liked ? ' liked' : ''}`}
        aria-label={liked ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
        onClick={() => setLiked((v) => !v)}
      >
        <HeartIcon filled={liked} />
      </button>
      <div className="product-photo">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <span className="product-weight">{product.weight}</span>
          <span className="product-price">قیمت محصول</span>
        </div>
        <button className="btn btn-cart" type="button">
          <CartIcon />
          افزودن به سبد
        </button>
      </div>
    </article>
  )
}

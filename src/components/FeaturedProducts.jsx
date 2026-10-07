import { PRODUCTS } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'
import ProductCard from './ProductCard.jsx'

export default function FeaturedProducts() {
  return (
    <section className="section featured" id="products">
      <div className="container">
        <SectionHeading title="محبوب‌ترین‌های نوبرانه" subtitle="انتخاب مشتریان ما از طعم‌های همیشگی" />
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

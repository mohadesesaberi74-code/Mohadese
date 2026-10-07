import { CATEGORIES } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'

export default function Categories() {
  return (
    <section className="section categories" id="categories">
      <div className="container">
        <SectionHeading
          title="دسته‌بندی محصولات"
          subtitle="«برای هر آشپزی، یک طعم متفاوت»"
        />
        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <a className="category-card" href="#products" key={c.id} data-reveal>
              <div className="category-photo">
                <img src={c.image} alt={c.name} loading="lazy" />
              </div>
              <h3>{c.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { SPECIALS } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'

export default function Specials() {
  return (
    <section className="section specials" id="specials">
      <div className="container">
        <SectionHeading title="محصولات ویژه" subtitle="انتخابی خاص از طعم‌های ممتاز نوبرانه" tone="light" />
        <div className="special-grid">
          {SPECIALS.map((s) => (
            <article className="special-card" key={s.id} data-reveal>
              <div className="special-photo">
                <img src={s.image} alt={s.name} loading="lazy" />
              </div>
              <div className="special-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <span className="product-weight">{s.weight}</span>
                <span className="product-price">قیمت محصول</span>
              </div>
            </article>
          ))}
        </div>
        <div className="center" data-reveal>
          <a className="btn btn-gold" href="#products">مشاهده همه محصولات</a>
        </div>
      </div>
    </section>
  )
}

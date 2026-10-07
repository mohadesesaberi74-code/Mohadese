import { RECIPES } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'

export default function Recipes() {
  return (
    <section className="section recipes" id="recipes">
      <div className="container">
        <SectionHeading title="با نوبرانه خوشمزه‌تر بپز" subtitle="نکته‌ها و دستورهای آشپزی ایرانی" />
        <div className="recipe-grid">
          {RECIPES.map((r) => (
            <article className="recipe-card" key={r.id} data-reveal>
              <div className="recipe-photo">
                <img src={r.image} alt={r.title} loading="lazy" />
              </div>
              <div className="recipe-body">
                <h3>{r.title}</h3>
                <p>{r.preview}</p>
                <a className="link-more" href="#recipes">مشاهده دستور</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

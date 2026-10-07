import { FEATURES } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <SectionHeading title="چرا نوبرانه؟" subtitle="چهار دلیل برای اعتماد شما" tone="light" />
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title} data-reveal>
              <span className="feature-icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

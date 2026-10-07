export default function SectionHeading({ title, subtitle, tone = 'dark' }) {
  return (
    <div className={`section-heading tone-${tone}`} data-reveal>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

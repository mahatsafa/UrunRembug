export default function Section({ eyebrow, title, children, tone, id }) {
  return (
    <section className={`section ${tone ? `section-${tone}` : ''}`} id={id}>
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

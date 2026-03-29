// src/components/Section.jsx
export default function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

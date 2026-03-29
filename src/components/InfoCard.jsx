export default function InfoCard({ title, sub, meta }) {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardSub">{sub}</p>
      {meta && <span className="cardMeta">{meta}</span>}
    </div>
  );
}
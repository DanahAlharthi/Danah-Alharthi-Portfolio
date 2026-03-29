export default function Card({ title, sub, meta }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardSub">{sub}</div>
      {meta ? <div className="cardMeta">{meta}</div> : null}
    </div>
  );
}

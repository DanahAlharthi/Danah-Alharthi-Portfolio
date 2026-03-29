import Card from "./Card";

export default function Education({ education }) {
  return(
    <div className="timeline">
      {education.map((e,i) => (
        <div className="tItem" key={i}>
          <div className="dot" />
          <Card title ={e.title} sub={e.sub} meta={e.meta} />
        </div>
      ))}
    </div>
  );
}

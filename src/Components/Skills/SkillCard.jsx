export default function SkillCard({ title, items, delay, visible }) {
  return (
    <div
      className={`card ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay * 70}ms` }}
    >
      <h2>{title}</h2>
      <div className="items">
        {items.map((i, index) => (
          <div key={index} className="item">
            <img src={i.icon} alt={i.label} className="icon" />
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

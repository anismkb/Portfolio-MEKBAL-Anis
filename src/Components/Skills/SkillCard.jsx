export default function SkillCard({ title, items }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="items">
        {items.map((i, index) => (
          <div key={index} className="item">
            <span className="icon">{i.icon}</span>
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ image, lien, title, description, items }) {
  return (
    <div className="card-project">
      <img src={image} alt={title} />

      <div className="title">
        <br/>
        <h2>{title}</h2>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="items">
        {items.map((i, index) => (
          <div key={index} className="item">
            <p>{i.technologie}</p>
          </div>
        ))}
      </div>

      <div className="lien">
        <a href={lien} target="_blank">
          View project
        </a>
      </div>
    </div>
  );
}

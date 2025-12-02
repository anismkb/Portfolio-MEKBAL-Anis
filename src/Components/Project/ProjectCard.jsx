import '@fortawesome/fontawesome-free/css/all.min.css';

export default function ProjectCard({ image, lien, title, description, items }) {
  return (
    <div className="card-project">
      <img src={image} alt={title} />

      <div className="overlay">
        <a href={lien} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-link"></i>
        </a>
      </div>

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
        <a href={lien} target="_blank" rel="noopener noreferrer">
          View project
        </a>
      </div>
    </div>
  );
}


export default function SkillCard({ image, lien, title, description, items }) {
    return(
        <div className="card">
            <div className="image">
                <img src={image} alt="" />
                <div className="title"> 
                    <h2>{title}</h2>     
                </div>
                <div className="description">
                    <p> {description} </p>
                </div>
                <div className="items">
                    {items.map((i, index)=>(
                        <dev key={index} className="item">
                            <p> {i.technologie} </p>
                        </dev>
                    ))
                    }
                </div>
                <div className="lien">
                    <a href={lien} target="_blank"> View project </a>
                </div>
            </div>
        </div>
    );
}
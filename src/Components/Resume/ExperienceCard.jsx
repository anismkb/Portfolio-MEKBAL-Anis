
export default function ExperienceCard({date, title, company, description, textColor }){
    return (
        <div className="Exp-Card">
            <p className="date" > {date} </p>
            <h3 className="title-resume"> {title} </h3>
            <p className="company" style={{ color: textColor }}> {company} </p>
            <p> {description} </p>
        </div>
    )
}
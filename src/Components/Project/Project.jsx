import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard.jsx";
import conveydyn from '../../assets/convey.jpg';

const Projet = () => {
  return (
    <div className="project">
      <div className="title">
        <h1>Projects</h1>
        <p className="subtitle">My recents projects</p>
        <hr className="blue-line" />
      </div>
      <div className="projectCards">
        <ProjectCard 
          image= {conveydyn}
          lien={""}
          title="Conveydyn Wizard"
          description="It is used to help with the sizing of a Conveydyn® belt for roller conveyors — whether straight or curved conveyors."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Asp.Net" },
          ]}
        />

        <ProjectCard 
          image= {conveydyn}
          lien={""}
          title="Conveydyn Wizard"
          description="It is used to help with the sizing of a Conveydyn® belt for roller conveyors — whether straight or curved conveyors."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Asp.Net" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projet;
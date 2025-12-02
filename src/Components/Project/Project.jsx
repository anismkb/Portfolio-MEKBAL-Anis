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
          title="Food Delivery App"
          description="Application mobile de food delivery incluant la navigation entre restaurants, le choix des repas, la gestion du panier et l’intégration d’un module de paiement. Conçue avec une architecture propre et une interface moderne."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Firebase" },
          ]}
        />

        
        <ProjectCard 
          image= {conveydyn}
          lien={""}
          title="TIC-TAC-TAO Game"
          description="Android Tic-Tac-Toe app featuring dynamic 3x3 and 4x4 board generation, optimized game logic, responsive UI, and smooth player interactions."
          items={[
            { technologie: "Java" },
            { technologie: "Android Studio" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projet;
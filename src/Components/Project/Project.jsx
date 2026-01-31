import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard.jsx";
import conveydyn from '../../assets/convey.jpg';
import conveydyn_app from '../../assets/conveydyn.png'
import delevery from '../../assets/delevery_app.png'
import jeux_xo from '../../assets/jeux_xo.png'
import godot from '../../assets/godot.png'


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
          image= {conveydyn_app}
          lien={"https://play.google.com/store/apps/details?id=com.hutchinson.conveydyn_wizard&hl=fr"}
          title="Conveydyn Wizard"
          description="It is used to help with the sizing of a Conveydyn® belt for roller conveyors — whether straight or curved conveyors."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Asp.Net" },
            { technologie: "SQL Server" },
            { technologie: "XCode" },
          ]}
        />

        <ProjectCard 
          image= {delevery}
          lien={"https://github.com/anismkb/Food_delivery_Flutter_App"}
          title="Food Delivery App"
          description="Application mobile de food delivery incluant la navigation entre restaurants, le choix des repas, la gestion du panier et l’intégration d’un module de paiement. Conçue avec une architecture propre et une interface moderne."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Firebase" },
          ]}
        />

        <ProjectCard 
          image= {jeux_xo}
          lien={"https://github.com/anismkb/TIC-TAC-TAO-Android-App"}
          title="TIC-TAC-TAO Game"
          description="Android Tic-Tac-Toe app featuring dynamic 3x3 and 4x4 board generation, optimized game logic, responsive UI, and smooth player interactions."
          items={[
            { technologie: "Java" },
            { technologie: "Android Studio" },
          ]}
        />
        
        <ProjectCard 
          image= {conveydyn}
          lien={"https://github.com/anismkb/Recipe_Android_App"}
          title="Recipe App"
          description="Android Tic-Tac-Toe app featuring dynamic 3x3 and 4x4 board generation, optimized game logic, responsive UI, and smooth player interactions."
          items={[
            { technologie: "Kotlin" },
            { technologie: "API Rest" },
            { technologie: "Android Studio" },
          ]}
        />

        <ProjectCard 
          image= {godot}
          lien={"https://github.com/anismkb/Godot_Project"}
          title="Godot 2D Platformer"
          description="Jeu de plateforme 2D avec système de détection de proximité. L'ennemi suit le joueur lorsqu'il entre dans sa zone de détection. Mouvement fluide avec animations directionnelles."
          items={[
            { technologie: "Godot" },
          ]}
        />

        <ProjectCard 
          image= {godot}
          lien={"https://github.com/anismkb/Mancala-Game-"}
          title="Mancala Game"
          description="Jeu de plateforme 2D avec système de détection de proximité. L'ennemi suit le joueur lorsqu'il entre dans sa zone de détection. Mouvement fluide avec animations directionnelles."
          items={[
            { technologie: "Godot" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projet;
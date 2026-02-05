import React from "react";
import "./Project.css";
import ProjectCard from "./ProjectCard.jsx";
import conveydyn from '../../assets/convey.jpg';
import conveydyn_app from '../../assets/conveydyn_.png'
import delevery from '../../assets/delevery_app.png'
import jeux_xo from '../../assets/jeux_xo.png'
import godot from '../../assets/godot.png'
import mancala from '../../assets/mancala.png'
import recipe_app from '../../assets/recipe_app.png'
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Projet = () => {
  const {ref, visible} = useScrollAnimation();

  return (
    <div className="project" ref={ref}>
      <div className={`title scroll-title ${visible ? "show":""}`}>
        <h1>Projects</h1>
        <p className="subtitle">My recents projects</p>
        <hr className="blue-line" />
      </div>
      <div className="projectCards">
        <ProjectCard 
          image= {conveydyn_app}
          lien={"https://play.google.com/store/apps/details?id=com.hutchinson.conveydyn_wizard&hl=fr"}
          title="Conveydyn Wizard"
          description="Mobile App for Hutchinson company, it's used to help with the sizing of a Conveydyn® belt for roller conveyors whether straight or curved conveyors."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Asp.Net" },
            { technologie: "SQL Server" },
            { technologie: "XCode" },
          ]}
          delay={0}
          visible={visible}
        />

        <ProjectCard 
          image= {delevery}
          lien={"https://github.com/anismkb/Food_delivery_Flutter_App"}
          title="Food Delivery App"
          description="Mobile food delivery application featuring restaurant browsing, meal selection, cart management, and payment module integration. Designed with a modern user interface."
          items={[
            { technologie: "Flutter" },
            { technologie: "Dart" },
            { technologie: "Firebase" },
          ]}
          delay={1}
          visible={visible}
        />
        
        <ProjectCard 
          image= {recipe_app}
          lien={"https://github.com/anismkb/Recipe_Android_App"}
          title="Recipe App"
          description="An Android application that allows users to browse, search, and discover a wide variety of recipes. Users can easily find recipes by name or ingredients and save their favorite ones for quick access."
          items={[
            { technologie: "Kotlin" },
            { technologie: "API Rest" },
            { technologie: "Android Studio" },
          ]}
          delay={2}
          visible={visible}
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
          delay={3}
          visible={visible}
        />

        <ProjectCard 
          image= {godot}
          lien={"https://github.com/anismkb/Godot_Project"}
          title="Godot 2D Platformer"
          description="2D platformer game featuring a proximity detection system where enemies follow the player upon entering their detection zone. Smooth movement with directional animations."
          items={[
            { technologie: "Godot" },
          ]}
          delay={4}
          visible={visible}
        />

        <ProjectCard 
          image= {mancala}
          lien={"https://github.com/anismkb/Mancala-Game-"}
          title="Mancala Game"
          description="A Mancala strategy game with AI opponent, built in Python using Pygame. Features intelligent decision-making with the NegaMax algorithm and interactive gameplay."
          items={[
            { technologie: "Python" },
            { technologie: "Pygame" },
          ]}
          delay={5}
          visible={visible}
        />
      </div>
    </div>
  );
}

export default Projet;
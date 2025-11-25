import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

/*
const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="title">
                <p class="text-4xl font-bold"> Skills </p>
                <h1 class="text-2xl"> My areas of expertise</h1>
            </div>
            <div className="expertise">
                <ul>
                    <li> Frontend Development: HTML, CSS, JavaScript, React.js, Vue.js</li>
                    <li> Backend Development: Django, .Net, RESTful APIs</li>
                    <li> Mobile Development: Kotlin, Flutter, Swift</li>
                    <li> Database Management: Sql Server, MySql, Firebase</li>   
                    <li> Tools & Others : Postman, Swagger, Docker, Git, Github Actions, Linux</li>
                </ul>
            </div>
        </div>
    )
}
    export default Skills;
*/


export default function App() {
  return (
    <div className="skills" id="skills">
      <div className="title-section">
        <h1> Skills </h1>
        <p className="subtitle"> My areas of expertise </p>
      </div>

      <div className="container">
        <SkillCard 
        title="Frontend"
        items={[
          { label: "HTML5", icon: "🌐" },
          { label: "CSS3", icon: "🎨" },
          { label: "TypeScript", icon: "📘" },
          { label: "React", icon: "⚛️" },
          { label: "Tailwind CSS", icon: "🌊" },
        ]}
        />

        <SkillCard 
            title="Backend"
            items={[
            { label: "Django", icon: "🟩" },
            { label: "ASP.Net", icon: "🚀" },
            { label: "PHP", icon: "🐘" },
            { label: "FastAPI", icon: "⚡" },
            ]}
        />

        <SkillCard
            title="Database"
            items={[
            { label: "MySQL", icon: "🐬" },
            { label: "MongoDB", icon: "🍃" },
            { label: "PostgreSQL", icon: "🐘" },
            { label: "Firebase", icon: "🔴" },
            ]}
        />

        <SkillCard
            title="Mobile"
            items={[
            { label: "Flutter", icon: "🐬" },
            { label: "Kotlin", icon: "🍃" },
            { label: "Swift", icon: "🐘" },
            ]}
        />

        <SkillCard
            title="Tools & Others"
            items={[
            { label: "Figma", icon: "🐬" },
            { label: "Postman", icon: "🍃" },
            { label: "Docker", icon: "🐘" },
            { label: "Git", icon: "🐘" },
            { label: "Github Actions", icon: "🐘" },
            { label: "Linux", icon: "🐘" },
            ]}
        />
      </div>
      
    </div>
  );
}


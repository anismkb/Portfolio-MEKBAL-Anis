import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import html from "../../assets/html5.png";
import css from "../../assets/css-3.png";
import asp from "../../assets/.net.png";
import mysql from "../../assets/mysql.png";
import php from "../../assets/php.png";
import postgeresql from "../../assets/postgres.png";
import mongodb from "../../assets/mongodb-icon-1.svg";
import swift from "../../assets/swift.png";
import linux from "../../assets/linux.png";
import django from "../../assets/django-logo.png";
import dart from "../../assets/Dart-logo.png";
import flutter from "../../assets/flutter.png";
import kotlin from "../../assets/Kotlin_Icon.png";
import figma from "../../assets/Figma-logo.svg.png";
import firebase from "../../assets/firebase-1.svg";
import postman from "../../assets/postman.svg";
import docker from "../../assets/docker.png";
import git from "../../assets/Git_icon.svg.png";
import gitActions from "../../assets/github-actions.png";
import react from "../../assets/React-icon.svg.png";
import tailwind from "../../assets/tailwind-icon.png";
import typescript from "../../assets/typescript.png";
import pytest from "../../assets/pytest.svg";
import junit from "../../assets/junit__.png";


const Skills = () => {
  return (
    <div className="skills">
      <div className="title">
        <h1> Skills </h1>
        <p className="subtitle"> My areas of expertise </p>
        <hr className="blue-line" />
      </div>

      <div className="container">
        <SkillCard 
        title="Frontend"
        items={[
          { label: "HTML5", icon: html },
          { label: "CSS3", icon: css },
          { label: "TypeScript", icon: typescript },
          { label: "React", icon: react },
          { label: "Tailwind CSS", icon:  tailwind},
        ]}
        />

        <SkillCard 
            title="Backend"
            items={[
            { label: "Django", icon: django },
            { label: ".Net Core", icon: asp },
            { label: "PHP", icon: php },
            ]}
        />

        <SkillCard
            title="Database"
            items={[
            { label: "MySQL", icon: mysql },
            { label: "MongoDB", icon: mongodb },
            { label: "PostgreSQL", icon: postgeresql },
            { label: "Firebase", icon: firebase },
            ]}
        />

        <SkillCard
            title="Mobile"
            items={[
            { label: "Flutter", icon: flutter },
            { label: "Kotlin", icon: kotlin },
            /*{ label: "Swift", icon: swift },*/
            ]}
        />
        <SkillCard
            title="Tests & Qualité Logiciel"
            items={[
            { label: "Pytest", icon: pytest },
            { label: "JUnit", icon: junit },
            ]}
        />

        <SkillCard
            title="Tools & Others"
            items={[
            { label: "Postman", icon: postman },
            { label: "Docker", icon: docker },
            { label: "Git", icon: git },
            { label: "Github Actions", icon: gitActions },
            { label: "Linux", icon:  linux},
            ]}
        />
      </div>
      
    </div>
  );
}

export default Skills;


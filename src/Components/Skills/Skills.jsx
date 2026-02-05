import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import html from "../../assets/html5.png";
import css from "../../assets/css-3.png";
import asp from "../../assets/.net.png";
import mysql from "../../assets/mysql.png";
import php from "../../assets/php.png";
import postgeresql from "../../assets/postgres.png";
import mongodb from "../../assets/mongodb-icon-1.svg";
import linux from "../../assets/linux.png";
import django from "../../assets/django-logo.png";
import flutter from "../../assets/flutter.png";
import kotlin from "../../assets/Kotlin_Icon.png";
import firebase from "../../assets/firebase-1.svg";
import postman from "../../assets/postman.svg";
import docker from "../../assets/docker.png";
import git from "../../assets/Git_icon.svg.png";
import gitActions from "../../assets/github-actions.png";
import reactIcon from "../../assets/React-icon.svg.png";
import tailwind from "../../assets/tailwind-icon.png";
import typescript from "../../assets/typescript.png";
import pytest from "../../assets/pytest.svg";
import junit from "../../assets/junit__.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Skills = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <div className="skills" ref={ref}>
      <div className={`title scroll-title ${visible ? "show" : ""}`}>
        <h1>Skills</h1>
        <p className="subtitle">My areas of expertise</p>
        <hr className="blue-line" />
      </div>

      <div className="container">
        {[
          {
            title: "Frontend",
            items: [
              { label: "HTML5", icon: html },
              { label: "CSS3", icon: css },
              { label: "TypeScript", icon: typescript },
              { label: "React", icon: reactIcon },
              { label: "Tailwind CSS", icon: tailwind },
            ],
          },
          {
            title: "Backend",
            items: [
              { label: "Django", icon: django },
              { label: ".Net Core", icon: asp },
              { label: "PHP", icon: php },
            ],
          },
          {
            title: "Database",
            items: [
              { label: "MySQL", icon: mysql },
              { label: "MongoDB", icon: mongodb },
              { label: "PostgreSQL", icon: postgeresql },
              { label: "Firebase", icon: firebase },
            ],
          },
          {
            title: "Mobile",
            items: [
              { label: "Flutter", icon: flutter },
              { label: "Kotlin", icon: kotlin },
            ],
          },
          {
            title: "Tests & Qualité Logiciel",
            items: [
              { label: "Pytest", icon: pytest },
              { label: "JUnit", icon: junit },
            ],
          },
          {
            title: "Tools & Others",
            items: [
              { label: "Postman", icon: postman },
              { label: "Docker", icon: docker },
              { label: "Git", icon: git },
              { label: "Github Actions", icon: gitActions },
              { label: "Linux", icon: linux },
            ],
          },
        ].map((card, index) => (
          <SkillCard
            key={index}
            title={card.title}
            items={card.items}
            delay={index}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

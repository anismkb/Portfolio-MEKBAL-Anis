import React from "react";
import "./Resume.css";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="resume">
        <div className="title">
            <h1> Resume </h1>
            <p className="subtitle"> My journey </p>
            <hr className="blue-line" />
        </div>
        <div className="content">
            <div className="Experience">
                <h1 className="titleSection">
                    <FaBriefcase className="icon" /> Experience
                </h1>
                <ExperienceCard
                    date={"Avril 2025 - September 2025"}
                    title={"Software Engineer Intern "}
                    company={"Hutchinson - France "}
                    description={"Developed and designed responsive websites for small businesses, enhancing their online presence and user engagement through modern web technologies."}
                    textColor= {"#DA7C25"}     // texte en noir
                />
                <ExperienceCard
                    date={"Avril 2024 - juilet 2024"}
                    title={"Software Tester "}
                    company={"ANEO - France "}
                    description={"Developed and designed responsive websites for small businesses, enhancing their online presence and user engagement through modern web technologies."}
                    textColor= {"#DA7C25"} 
                />
                <ExperienceCard
                    date={"fevrie 2025 - juin 2025"}
                    title={"Full-stack Developer "}
                    company={"CERIST - Algeria "}
                    description={"Developed and designed responsive websites for small businesses, enhancing their online presence and user engagement through modern web technologies."}
                    textColor= {"#DA7C25"} 
                />
            </div>
            <div className="Education">
                <h1 className="titleSectionEducation">
                    <FaGraduationCap className="icon" /> Education
                </h1>
                <ExperienceCard
                    date={"2023 - 2025"}
                    title={" Master's in computer science, software for embedded systems "}
                    company={"Université de Bretagne Occidentale - Brest "}
                    description={"Developed and designed responsive websites for small businesses, enhancing their online presence and user engagement through modern web technologies."}
                    textColor= {" #b923e1"} 
                />
                <ExperienceCard
                    date={"2022 - 2023"}
                    title={" Master 1 in Visuel Computing "}
                    company={"USTHB - Algeria"}
                    description={"Focus on image processing, machine learning, video game design, large data visualization, multimedia communication, and image compression."}
                    textColor= {" #b923e1"} 
                />
                <ExperienceCard
                    date={"2019 - 2022"}
                    title={" Bachelor's degree in computer science "}
                    company={"USTHB - Algeria"}
                    description={"Studied algorithms, logic, Python, C, Java, PHP, databases (SQL), compilation, software architecture, and OOP."}
                    textColor= {" #b923e1"} 
                />
            </div>
        </div>
    </div>
 )
}

export default Resume;
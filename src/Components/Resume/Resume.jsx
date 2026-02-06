import React from "react";
import "./Resume.css";
import ExperienceCard from "./ExperienceCard";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Resume = () => {
  const {ref, visible} = useScrollAnimation();
  return (
    <div className="resume" ref={ref}>
        <div className={`title scroll-title ${visible ? "show":""}`}>
            <h1> Resume </h1>
            <p className="subtitle"> My journey </p>
            <hr className="blue-line" />
        </div>
        <div className="content">
            <div className="Experience">
                <h1 className={`titleSectionExperience ${visible ? "show":""}`}>
                    <FaBriefcase className="icon" /> Experience
                </h1>
                <div className={`timeline-container ${visible ? "show":""}`}>
                    <ExperienceCard
                        date={"April 2025 - September 2025"}
                        title={"Software Engineer - Intern "}
                        company={"Hutchinson - France "}
                        description={"Developed a mobile application by building the front-end according to design guidelines and implementing RESTful APIs for the backend. Enhanced and maintained internal software using C#/.NET, including new feature development and bug fixing. Set up CI/CD pipelines to automate testing and deployment."}
                        textColor= {"#5a85f9"}
                    />
                    <ExperienceCard
                        date={"April 2024 - July 2024"}
                        title={"Software Tester - Intern"}
                        company={"ANEO - France "}
                        description={"Conducted comprehensive functional and technical analysis for the entire project lifecycle. Designed and implemented robust unit and integration tests to ensure code reliability and quality. Developed and integrated a minimalist library into three dynamic code recompilation tools (Verro, PENE, and Verificarlo). Established a CI pipeline to automate test execution and deployment."}
                        textColor= {"#5a85f9"} 
                    />
                    <ExperienceCard
                        date={"May 2023 - August 2022"}
                        title={"Develolper .Net - Intern"}
                        company={"CERIST - Algeria "}
                        description={"Designed and implemented the backend for a national documentary information system. Modeled relational databases and developed secure CRUD functionalities for institution management. Built a multi-criteria search engine and optimized SQL queries for high performance. Established data validation, error handling, and Role-Based Access Control (RBAC)."}
                        textColor= {"#5a85f9"} 
                    />
                    <ExperienceCard
                        date={"February 2022 - June 2022"}
                        title={"Full-stack Developer - Intern "}
                        company={"CERIST - Algeria "}
                        description={"Designed the software architecture by modeling the system using UML. Engineered and developed high-performance, maintainable RESTful APIs for the backend. Contributed to frontend feature development. Implemented and optimized an advanced search engine based on Elasticsearch, significantly improving search efficiency and relevance. Collaborated proactively with team members to ensure project quality and consistency."}
                        textColor= {"#5a85f9"} 
                    />
                </div>
            </div>
            <div className="Education">
                <h1 className={`titleSectionEducation ${visible ? "show":""}`}>
                    <FaGraduationCap className="icon" /> Education
                </h1>
                <div className={`timeline-container ${visible ? "show":""}`}>
                    <ExperienceCard
                        date={"2023 - 2025"}
                        title={" Master's in computer science, software for embedded systems "}
                        company={"Université de Bretagne Occidentale - Brest "}
                        description={"Focus on developing high-reliability software for real-time and resource-constrained environments. Key areas included low-level programming (C/C++), IOT, mobile development and ensuring system security and performance optimization for critical applications."}
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
    </div>
 )
}

export default Resume;
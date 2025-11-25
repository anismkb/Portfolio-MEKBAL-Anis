import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="title">
                <p class="text-4xl"> Skills </p>
                <br></br>
                <h3> My areas of expertise</h3>
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
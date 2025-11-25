import React from "react";
import "./About.css";
import ANIS from '../../assets/ANIS.jpg'

const About = () => {
  return (
    <div className='about' id="about">
        <div className="about-title">
            <p class="text-4xl"> About me </p>
        </div>
        <div className='about-content'>
            <img src={ANIS} alt=""/>
            <div className="about-right">
                <div className="about-desc">
                    <p>I'm a software engineer with a Master’s degree in Software Engineering. Passionate about web, mobile, and software development, I enjoy designing high-performance and user-friendly solutions, from intuitive front-end interfaces to robust backend architectures. </p>
                    <p>Curious, adaptable, and highly motivated, I’m always eager to learn, take on new challenges, and contribute to innovative projects that combine technical excellence and creativity.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
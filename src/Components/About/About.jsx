import React from "react";
import "./About.css";
import ANIS from '../../assets/ANIS.jpg'
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaSitemap} from "react-icons/fa";

const About = () => {
  return (
    <div className='about'>
        <div className="title">
            <h1> About me </h1>
            <p className="subtitle">Quick review</p>
            <hr className="blue-line" />
        </div>
        <div className='about-content'>
            <img src={ANIS} alt=""/>
            <div className="about-right">
                <div className="about-desc">
                    <p> Anis MEKBAL, a passionate <strong>Software Engineer</strong> and <strong>Full-Stack Developer </strong>  with a Master’s degree. I blend academic rigor with technical expertise to build high-performance, end-to-end solutions. From intuitive UIs to robust backend architectures, I specialize in mobile, backend and complex systems. Driven by curiosity, I’m always seeking the next tech challenge to innovate and grow.</p>
                </div>
                {/* Section des Icônes d'expertise */}
                <div className="expertise-icons">
                    <div className="icon-item">
                        <FaMobileAlt className="icon" size={80}/>
                        <span> Mobile</span>
                    </div>
                    <div className="icon-item">
                        <FaDatabase className="icon" size={80}/>
                        <span> Backend</span>
                    </div>
                    <div className="icon-item">
                        <FaSitemap className="icon" size={80} />
                        <span>Systems Complexes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
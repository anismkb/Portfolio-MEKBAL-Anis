import { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";

function App() {

  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start"});
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "contact"];
      
      const offset = 300; // Par exemple 100 pixels

      let current = "home"; 

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          
          if (rect.top <= offset) {
            current = id;
          } 
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar active={active} scrollToSection={scrollToSection} />

      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Project /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </>
  );
}

export default App;

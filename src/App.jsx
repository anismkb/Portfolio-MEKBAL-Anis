import { useState, useEffect } from "react";
import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Resume from "./Components/Resume/Resume";

function App() {

  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume"];
      let current = "home";

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
            break;
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
      <sectionn id="projects"><Project /></sectionn>
      <sectionn id="resume"><Resume /></sectionn>

    </>
  );
}

export default App;

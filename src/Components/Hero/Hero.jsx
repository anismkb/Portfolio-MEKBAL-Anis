import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Déclencher l'animation après un court délai pour laisser le DOM se charger
    const timer = setTimeout(() => {
      setMounted(true)
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className='hero'>
        <p className='hello hero-animate'> Hello, I'm</p>
        <h1 className='full hero-animate'> Anis Mekbal </h1>
        <h3 className='job hero-animate'> Full Stack Developer </h3>
        <p className='presentation hero-animate'> Bringing web and mobile projects to life with optimized performance and intuitive design. </p>
        <div className='hero-button hero-animate'>
            <div className='hero-connect'>Contact me</div>
            <div className='hero-resume'>My resume</div>
        </div>
        <div className="social-icons hero-animate">
          <a href="https://github.com/anismkb" className="icon-circle" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anis-mekbal" className="icon-circle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:anismekbal2001@gmail.com" className="icon-circle"><i className="fas fa-envelope"></i></a>
        </div>
        <div className='scroll-down hero-animate'>
          <p className='label'>Scroll Down </p>
          <i className='fa-solid fa-arrow-down'></i>
        </div>
      </div>
    )
  }

  return (
    <div className='hero'>
        <p className='hello hero-animate'> Hello, I'm</p>
        <h1 className='full hero-animate'> Anis Mekbal </h1>
        <h3 className='job hero-animate'> Full Stack Developer </h3>
        <p className='presentation hero-animate'> Bringing web and mobile projects to life with optimized performance and intuitive design. </p>
        <div className='hero-button hero-animate'>
            <div className='hero-connect'
             onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
            >
              Contact me
            </div>
            <div className='hero-resume'
              onClick={() => document.getElementById('resume').scrollIntoView({behavior: 'smooth'})}
            >
              My resume
            </div>
        </div>
        <div className="social-icons hero-animate">
          <a href="https://github.com/anismkb" className="icon-circle" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anis-mekbal" className="icon-circle" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:anismekbal2001@gmail.com" className="icon-circle"><i className="fas fa-envelope"></i></a>
        </div>
        <div 
          className='scroll-down'
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <p className='label'>Scroll Down </p>
          <i className='fa-solid fa-arrow-down'></i>
        </div>
    </div>
  )
}

export default Hero
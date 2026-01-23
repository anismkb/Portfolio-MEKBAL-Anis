import React from 'react'
import './Hero.css'
import ANIS from '../../assets/ANIS.jpg'
import scroll from '../../assets/scroll.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <p className='hello'> Hello, I'm</p>
        <h1 className='full'> Anis Mekbal </h1>
        <h3 className='job'> Full Stack Developer </h3>
        <p className='presentation'> Bringing web and mobile projects to life with optimized performance and intuitive design. </p>
        <div className='hero-button'>
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
        <div class="social-icons">
          <a href="https://github.com/anismkb" className="icon-circle" target="_blank">
              <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/anis-mekbal" className="icon-circle" target="_blank">
              <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:anismekbal2001@gmail.com" className="icon-circle"><i class="fas fa-envelope"></i></a>
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

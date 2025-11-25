import React from 'react'
import './Hero.css'
import ANIS from '../../assets/ANIS.jpg'
import scroll from '../../assets/scroll.jpg'

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img className='profile' src={ANIS} alt=""/>
        <h1 className='hero-descript'> I'm MEKBAL Anis, Full Stack Developer</h1>
        <div className='hero-button'>
            <div className='hero-connect'>Connect with me</div>
            <div className='hero-resume'>My resume</div>
        </div>
        <div 
          className='scroll-down'
          onClick={() => document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' })}
        >
          <h2>Scroll down </h2>
          <img className='scroll-image' src={scroll} alt=""/> 
        </div>

    </div>
  )
}

export default Hero

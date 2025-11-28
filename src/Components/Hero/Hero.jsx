import React from 'react'
import './Hero.css'
import ANIS from '../../assets/ANIS.jpg'
import scroll from '../../assets/scroll.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='profile' src={ANIS} alt=""/>
        <h1 className='hero-descript'> I'm MEKBAL Anis, Full Stack Developer</h1>
        <div className='hero-button'>
            <div className='hero-connect'>Contact me</div>
            <div className='hero-resume'>My resume</div>
        </div>
        <div 
          className='scroll-down'
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <p>Scroll down </p>
          <img className='scroll-image' src={scroll} alt=""/> 
        </div>

    </div>
  )
}

export default Hero

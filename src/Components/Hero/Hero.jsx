import React from 'react'
import './Hero.css'
import ANIS from '../../assets/ANIS.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={ANIS} alt=""/>
        <h1 className='hero-descript'> I'm MEKBAL Anis, Full Stack Developer</h1>
        <div className='hero-button'>
            <div className='hero-connect'>Connect with me</div>
            <div className='hero-resume'>My resume</div>
        </div>

    </div>
  )
}

export default Hero

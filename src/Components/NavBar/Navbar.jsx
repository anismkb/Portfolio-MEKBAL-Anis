import React from 'react'
import './Navbar.css'

const Navbar = ({ active, scrollToSection }) => {

  return (
    <div className='navbar'>
      <h1 className='navbar_title'>
        <span className='navbar_name'>Anis</span>
        <span className='navbar_separate'>.</span>
        <span className='navbar_prenom'>Mekbal</span>
      </h1>

      <div className='navbar_center'>
        <ul className='navbar_list'>
          <li className={active === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
          <li className={active === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About me</li>
          <li className={active === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</li>
          <li className={active === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</li>
          <li className={active === 'educations' ? 'active' : ''} onClick={() => scrollToSection('educations')}>Education</li>
        </ul>
      </div>

      <div className='navbar_end'>
        <div className='nav-connect'>Connect</div>
      </div>
    </div>
  )
}

export default Navbar

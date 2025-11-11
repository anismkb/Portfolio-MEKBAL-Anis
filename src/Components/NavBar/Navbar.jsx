import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar_title'>
        <span className='navbar_name'>Anis</span>
        <span className='navbar_separate'>.</span>
        <span className='navbar_prenom'>Mekbal</span>
      </h1>
      <div className='navbar_center'>
        <ul className='navbar_list'>
          <li>Home</li>
          <li>About me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
      </div>
      <div className='navbar_end'>
        <div className='nav-connect'>Connect</div>
      </div>
    </div>
  )
}

export default Navbar

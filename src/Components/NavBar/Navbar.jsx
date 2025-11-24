import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = React.useState('home');
  return (
    <div className='navbar'>
      <h1 className='navbar_title'>
        <span className='navbar_name'>Anis</span>
        <span className='navbar_separate'>.</span>
        <span className='navbar_prenom'>Mekbal</span>
      </h1>
      <div className='navbar_center'>
        <ul className='navbar_list'>
          <li className={active === 'home' ? 'active' : ''} onClick={() => setActive('home')}>Home</li>
          <li className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')}>About me</li>
          <li className={active === 'skills' ? 'active' : ''} onClick={() => setActive('skills')}>Skills</li>
          <li className={active === 'projects' ? 'active' : ''} onClick={() => setActive('projects')}>Projects</li>
          <li className={active === 'educations' ? 'active' : ''} onClick={() => setActive('educations')}>Education</li>
        </ul>
      </div>
      <div className='navbar_end'>
        <div className='nav-connect'>Connect</div>
      </div>
    </div>
  )
}

export default Navbar
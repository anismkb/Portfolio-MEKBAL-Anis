import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import ThemeToggle from '../../Theme/ThemeToggle';

const Navbar = ({ active, scrollToSection }) => {
    // État pour gérer l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false); 
    }

    return (
        <div className='navbar'>
            <h1 className='navbar_title' 
                onClick={() => handleLinkClick('home')} // Utiliser handleLinkClick
            >
                <span className='navbar_name'>Anis</span>
                <span className='navbar_separate'>.</span>
                <span className='navbar_prenom'>Mekbal</span>
            </h1>

            {/* 3. Bouton Hamburger (Visible seulement sur mobile) */}
            <div className='navbar_toggle' onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />} 
            </div>
            
            {/* 4. Ajout de la classe 'open' si le menu est ouvert */}
            <div className={`navbar_center ${isMenuOpen ? 'open' : ''}`}>
                <ul className='navbar_list'>
                    {/* Utiliser handleLinkClick pour fermer le menu après le clic */}
                    <li className={active === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</li>
                    <li className={active === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</li>
                    <li className={active === 'skills' ? 'active' : ''} onClick={() => handleLinkClick('skills')}>Skills</li>
                    <li className={active === 'projects' ? 'active' : ''} onClick={() => handleLinkClick('projects')}>Projects</li>
                    <li className={active === 'resume' ? 'active' : ''} onClick={() => handleLinkClick('resume')}>Resume</li>
                    <li className={active === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</li>
                </ul>
            </div>

            <div className={`navbar_end ${isMenuOpen ? 'open' : ''}`}>
                 <div className='nav-connect'><ThemeToggle /></div>
            </div>

        </div>
    )
}

export default Navbar

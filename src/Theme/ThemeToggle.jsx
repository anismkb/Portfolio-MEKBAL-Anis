// src/Components/ThemeToggle/ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <>
          <FaMoon className="theme-icon" />
          <span className="theme-text">Mode sombre</span>
        </>
      ) : (
        <>
          <FaSun className="theme-icon" />
          <span className="theme-text">Mode clair</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.scss';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>about me</Link></li>
          <h1>am</h1>
          <li><Link to="projects" smooth={true} duration={500}>portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>contact</Link></li>
          <li>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

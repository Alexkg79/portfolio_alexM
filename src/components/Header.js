import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.scss';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <header>
      <nav className={isMenuOpen ? 'open' : ''}>
        <span className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><Link to="home" smooth={true} duration={500} onClick={closeMenu}>home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={closeMenu}>about me</Link></li>
          <h1>am</h1>
          <li><Link to="projects" smooth={true} duration={500} onClick={closeMenu}>portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={closeMenu}>contact</Link></li>
          <li>
            <span onClick={toggleDarkMode} className="dark-mode-toggle">
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
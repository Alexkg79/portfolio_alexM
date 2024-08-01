import React, { useState } from 'react';
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
          <li><a href="#home">home</a></li>
          <li><a href="#about">about me</a></li>
          <h1>js</h1>
          <li><a href="#portfolio">portfolio</a></li>
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

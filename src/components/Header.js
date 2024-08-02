import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about me</Link></li>
          <h1>js</h1>
          <li><Link to="/projects">portfolio</Link></li>
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

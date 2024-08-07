import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink exact to="/" activeClassName="active">home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">about me</NavLink></li>
          <h1>am</h1>
          <li><NavLink to="/projects" activeClassName="active">portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">contact</NavLink></li>
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

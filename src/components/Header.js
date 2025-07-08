import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Header.scss';
  
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`site-header ${isMenuOpen ? 'nav-open' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <a href="#hero">am</a>
        </div>
        <nav className="main-nav">
          <ul>
            {/* On ferme le menu quand on clique sur un lien */}
            <li><a href="#hero" onClick={toggleMenu}>Accueil</a></li>
            <li><a href="#about" onClick={toggleMenu}>À Propos</a></li>
            <li><a href="#projets" onClick={toggleMenu}>Projets</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>

          <div className="nav-social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </nav>
        
        {/* Le clic sur le bouton déclenche la fonction toggleMenu */}
        <button className="mobile-nav-toggle" aria-label="Ouvrir la navigation" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}
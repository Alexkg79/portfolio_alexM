import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* Colonne 1: Accroche et Contact */}
        <div className="footer-column">
          <h3 className="footer-title logo-footer">am</h3>
          <p>Développeur passionné, prêt à transformer vos idées en expériences web mémorables.</p>
          <a href="mailto:alex.M79@outlook.com" className="footer-contact-link">alex.M79@outlook.com</a>
        </div>

        {/* Colonne 2: Navigation */}
        <div className="footer-column">
          <h3 className="footer-title">Navigation</h3>
          <ul className="footer-nav">
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">À Propos</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3: Réseaux Sociaux */}
        <div className="footer-column">
          <h3 className="footer-title">Suivez-moi</h3>
          <div className="footer-social-links">
            <a href="https://www.linkedin.com/in/alex-marolleau/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/Alexkg79?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://x.com/mrl_alex" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="copyright">&copy; {new Date().getFullYear()} Alex Marolleau. Tous droits réservés.</p>
        <a href="#hero" className="back-to-top" aria-label="Retour en haut">
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      </div>
    </footer>
  );
}
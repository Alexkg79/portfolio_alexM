import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBolt, faUniversalAccess, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Philosophy.scss';
import TitleCard from './TitleCard';

const philosophyData = [
  {
    id: 1,
    icon: faCode,
    title: "Code Propre & Maintenable",
    description: "J'écris un code sémantique, bien structuré et commenté. C'est la garantie d'un projet évolutif, facile à maintenir et sur lequel il est agréable de collaborer."
  },
  {
    id: 2,
    icon: faBolt,
    title: "Performance & Optimisation",
    description: "Un site rapide est un site agréable. J'optimise chaque aspect, du poids des images au temps de chargement, pour garantir une expérience utilisateur fluide et sans attente."
  },
  {
    id: 3,
    icon: faUniversalAccess,
    title: "Accessibilité",
    description: "Le web se doit d'être pour tout le monde. Je construis des interfaces inclusives, en respectant les standards sémantiques et la navigation au clavier, pour que personne ne soit laissé de côté."
  },
  {
    id: 4,
    icon: faMobileAlt,
    title: "Design Responsive & Intuitif",
    description: "Une bonne interface est invisible. Je conçois des designs qui s'adaptent parfaitement à tous les écrans et qui guident l'utilisateur naturellement vers son objectif."
  }
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-content">
        <TitleCard title="Ma Philosophie" />
        <div className="philosophy-grid">
          {philosophyData.map((card) => (
            <div className="philosophy-card" key={card.id}>
              <div className="philosophy-icon">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3 className="philosophy-title">{card.title}</h3>
              <p className="philosophy-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
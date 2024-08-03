import React from 'react';
import '../styles/ProjectCard.scss';

import icon1 from '../assets/icons/computer.png';
import icon2 from '../assets/icons/battery.png';
import icon3 from '../assets/icons/wifi.png';

const ProjectCard = ({ title, image, liveDemo, sourceCode }) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <div className="title-bar">
          <div className="buttons">
            <div className="close"></div>
            <div className="minimize"></div>
            <div className="maximize"></div>
          </div>
          <span className="title">{title}</span>
        </div>
        <img src={image} alt={title} className="project-image" />
        <div className="task-bar">
          <div className="task-icons left">
            <img src={icon1} alt="Icône Windows" className="task-icon" />
          </div>
          <div className="task-icons right">
            <img src={icon2} alt="Icône Batterie" className="task-icon" />
            <img src={icon3} alt="Icône WiFi" className="task-icon" />
          </div>
        </div>
      </div>
      <div className="project-links">
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">Démo en direct</a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">Code source</a>
      </div>
    </div>
  );
};

export default ProjectCard;

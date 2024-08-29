import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faDocker } from '@fortawesome/free-brands-svg-icons';
import project1Image1 from '../assets/projet/pr_react1.webp';
import project1Image2 from '../assets/projet/pr_react2.webp';
import project1Image3 from '../assets/projet/pr_react3.webp';
import project2Image1 from '../assets/projet/pr_be1.webp';
import project2Image2 from '../assets/projet/pr_be2.webp';
import project2Image3 from '../assets/projet/pr_be3.webp';

const projects = [
  {
    id: 1,
    title: 'Kasa App',
    images: [project1Image1, project1Image2, project1Image3],
    description: "Application web moderne de location d'appartements entre particuliers, développée avec React. Présente une interface utilisateur dynamique et responsive avec des fonctionnalités avancées comme une galerie d'images et des menus déroulants.",
    technologies: ['HTML', 'CSS', 'React'],
    liveDemo: 'https://kasa-app-six.vercel.app/',
    sourceCode: 'https://github.com/Alexkg79/kasa-app'
  },
  {
    id: 2,
    title: 'Mon vieux grimoire',
    images: [project2Image1, project2Image2, project2Image3],
    description: "Plateforme de gestion et de notation de livres avec une API RESTful complète. Inclut un système d'authentification sécurisé, gestion CRUD pour les livres et notations, et optimisation des images téléchargées.",
    technologies: ['Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://back-end-book.onrender.com/',
    sourceCode: 'https://github.com/Alexkg79/Back-end-Book'
  }
];

const getTechIcon = (tech) => {
  switch(tech.toLowerCase()) {
    case 'html': return faHtml5;
    case 'css': return faCss3Alt;
    case 'javascript': return faJs;
    case 'react': return faReact;
    case 'node.js': return faNodeJs;
    case 'python': return faPython;
    case 'docker': return faDocker;
    default: return null;
  }
};

const Projects = ({ isDarkMode }) => {
  return (
    <section id="projects">
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            images={project.images}
            description={
              <>
                {project.description}
                <div className="technologies">
                  <h4>Technologies utilisées :</h4>
                  <div className="tech-icons">
                    {project.technologies.map((tech, index) => {
                      const icon = getTechIcon(tech);
                      return icon ? (
                        <FontAwesomeIcon 
                          key={index} 
                          icon={icon} 
                          title={tech} 
                          className={isDarkMode ? 'icon-dark' : 'icon-light'}
                        />
                      ) : (
                        <span 
                          key={index} 
                          className={`tech-text ${isDarkMode ? 'text-dark' : 'text-light'}`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            }
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
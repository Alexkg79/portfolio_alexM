import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import project1Image from '../assets/projet/projet1.png';
import project2Image from '../assets/projet/projet2.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: project1Image,
    liveDemo: 'https://example.com/project1',
    sourceCode: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    image: project2Image,
    liveDemo: 'https://example.com/project2',
    sourceCode: 'https://github.com/yourusername/project2'
  }
  // Ajoutez plus de projets ici
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

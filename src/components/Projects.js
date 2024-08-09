import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import project1Image1 from '../assets/projet/projet1_1.png';
import project1Image2 from '../assets/projet/projet1_2.png';
import project2Image1 from '../assets/projet/projet2_1.png';
import project2Image2 from '../assets/projet/projet2_2.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    images: [project1Image1, project1Image2],
    description: 'Description du projet 1',
    liveDemo: 'https://example.com/project1',
    sourceCode: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    images: [project2Image1, project2Image2],
    description: 'Description du projet 2',
    liveDemo: 'https://example.com/project2',
    sourceCode: 'https://github.com/yourusername/project2'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            images={project.images}
            description={project.description}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

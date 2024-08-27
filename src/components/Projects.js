import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import project1Image1 from '../assets/projet/pr_react1.webp';
import project1Image2 from '../assets/projet/pr_react2.webp';
import project1Image3 from '../assets/projet/pr_react3.webp';
import project2Image1 from '../assets/projet/pr_be1.webp';
import project2Image2 from '../assets/projet/pr_be2.webp';
import project2Image3 from '../assets/projet/pr_be3.webp';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    images: [project1Image1, project1Image2, project1Image3],
    description: 'Description du projet 1',
    liveDemo: 'https://kasa-app-six.vercel.app/',
    sourceCode: 'https://github.com/Alexkg79/kasa-app'
  },
  {
    id: 2,
    title: 'Project 2',
    images: [project2Image1, project2Image2, project2Image3],
    description: 'Description du projet 2',
    liveDemo: 'https://back-end-book.onrender.com/',
    sourceCode: 'https://github.com/Alexkg79/Back-end-Book'
  }
];

const Projects = ({ isDarkMode }) => {
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
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

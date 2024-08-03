import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.scss';
import project1Image1 from '../assets/projet/projet1_1.png';
import project1Image2 from '../assets/projet/projet1_2.png';
import project2Image1 from '../assets/projet/projet2_1.png';
import project2Image2 from '../assets/projet/projet2_2.png';
import noteIcon from '../assets/icons/note.png';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    images: [project1Image1, project1Image2],
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic culpa ad consequuntur omnis iure. Omnis dolorem vel earum illo sunt! Optio eos quod explicabo mollitia placeat reiciendis voluptatum iure magnam, neque, dolor repellat soluta? Nostrum dolores est sunt adipisci ducimus deserunt, iusto dignissimos facilis itaque enim temporibus repellendus voluptatum aspernatur corporis maxime tenetur sapiente provident architecto ratione consequuntur. Facere, perspiciatis.',
    liveDemo: 'https://example.com/project1',
    sourceCode: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Project 2',
    images: [project2Image1, project2Image2],
    description: 'lorem30Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic culpa ad consequuntur omnis iure. Omnis dolorem vel earum illo sunt! Optio eos quod explicabo mollitia placeat reiciendis voluptatum iure magnam, neque, dolor repellat soluta? Nostrum dolores est sunt adipisci ducimus deserunt, iusto dignissimos facilis itaque enim temporibus repellendus voluptatum aspernatur corporis maxime tenetur sapiente provident architecto ratione consequuntur. Facere, perspiciatis.',
    liveDemo: 'https://example.com/project2',
    sourceCode: 'https://github.com/yourusername/project2'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const openDescriptionModal = (description) => {
    setSelectedProject(description);
    setDescriptionOpen(true);
  };

  const closeDescriptionModal = () => {
    setDescriptionOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            images={project.images}
            description={project.description}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
            openDescriptionModal={openDescriptionModal}
            noteIcon={noteIcon}
          />
        ))}
      </div>
      {isDescriptionOpen && (
        <div className="description-modal-overlay" onClick={closeDescriptionModal}>
          <div className="description-modal">
            <div className="title-bar">
              <div className="buttons">
                <div className="close" onClick={closeDescriptionModal}></div>
              </div>
              <span className="title">Description</span>
            </div>
            <div className="description-content">
              <p>{selectedProject}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

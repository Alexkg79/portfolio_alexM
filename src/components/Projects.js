import React from 'react';
import '../styles/Projects.scss';

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="project">
        <img src="/project1.jpg" alt="Project 1" />
        <h2>Project 1</h2>
        <a href="http://project1-demo.com">Live Demo</a>
        <a href="http://github.com/project1">Source Code</a>
      </div>
      <div className="project">
        <img src="/project2.jpg" alt="Project 2" />
        <h2>Project 2</h2>
        <a href="http://project2-demo.com">Live Demo</a>
        <a href="http://github.com/project2">Source Code</a>
      </div>
    </section>
  );
};

export default Projects;

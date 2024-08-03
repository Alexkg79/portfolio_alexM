import React from 'react';
import '../styles/About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="terminal">
        <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="terminal-body">
          <p className="command">alexmarolleau $ cat aboutalex</p>
          <p className="response">aboutalex (main) $ Bonjour ! Je suis Alex Marolleau, développeur web passionné par la création d'applications web dynamiques et engageantes. J'ai suivi une formation en webdesign et obtenu un Bac +2 en développement web, que j'ai réalisé en alternance.</p>
        </div>
      </div>
      <div className="terminal">
        <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="terminal-body">
          <p className="command">alexmarolleau $ cd compétences/outils</p>
          <p className="command">compétences/outils (main) $ ls</p>
          <p className="response">Maîtrisé avec</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <p className="response">Exposé à</p>
          <ul>
            <li>Python</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

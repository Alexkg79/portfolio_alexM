import '../styles/About.scss';
import TitleCard from './TitleCard';

export default function About() {
  return (
<section id="about" class="about-section">
  <div class="about-content">
    <TitleCard title="À Propos de Moi" />
    <div class="about-grid">
      
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="window-controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="window-title">alexmarolleau: ~/aboutalex</span>
        </div>
        <div class="terminal-body">
          <p>
            Je suis un développeur web passionné par la création d'applications dynamiques. En 2020, j'ai découvert ma passion pour le webdesign, ce qui m'a conduit à me spécialiser dans le développement web, où j'ai trouvé ma véritable vocation.
          </p>
          <p>
            Pour approfondir mes compétences, j'ai suivi un Bac +2 en développement web en alternance avec OpenClassrooms. Lors de cette expérience, j'ai travaillé à l'UDAF sur un projet de gestion de parc automobile en PHP, renforçant ainsi mes compétences en back-end et en développement de solutions pratiques.
          </p>
          <p>
            Bien que le front-end soit ma préférence pour la création d'interfaces intuitives, mon parcours m'a également permis de maîtriser les aspects full-stack du développement, me rendant apte à intervenir sur toutes les étapes d'un projet web.
          </p>
        </div>
      </div>

      <div class="terminal-window">
        <div class="terminal-header">
          <div class="window-controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="window-title">alexmarolleau: ~/competences</span>
        </div>
        <div class="terminal-body">
          <div class="skill-category">
            <h3>Maîtrisé :</h3>
            <ul class="skills-list">
              <li>HTML</li>
              <li>CSS3 (Sass/SCSS)</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PHP</li>
              <li>CMS</li>
              <li>SQL / NoSQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Exposé à :</h3>
            <ul class="skills-list">
              <li>Docker</li>
              <li>Tests unitaires (Jest)</li>
              <li>Déploiement (Vercel / Netlify)</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Actuellement en apprentissage :</h3>
            <ul class="skills-list">
              <li>Python</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
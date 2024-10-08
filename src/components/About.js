import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import '../styles/About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython, faDocker, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faServer, faCode } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState([]);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const terminal1Ref = useRef(null);
  const terminal2Ref = useRef(null);

  const fullText1 = `Je suis un développeur web passionné par la création d'applications dynamiques. En 2020, j'ai découvert ma passion pour le webdesign, ce qui m'a conduit à me spécialiser dans le développement web, où j'ai trouvé ma véritable vocation.

Pour approfondir mes compétences, j'ai suivi un Bac +2 en développement web en alternance avec OpenClassrooms. Lors de cette expérience, j'ai travaillé à l'UDAF sur un projet de gestion de parc automobile en PHP, renforçant ainsi mes compétences en back-end et en développement de solutions pratiques.

Bien que le front-end soit ma préférence pour la création d'interfaces intuitives, mon parcours m'a également permis de maîtriser les aspects full-stack du développement, me rendant apte à intervenir sur toutes les étapes d'un projet web.`;

  
  // Utilisation de useMemo pour mémoriser le tableau
  const fullText2 = useMemo(() => [
    { text: <strong>Maîtrisé :</strong>, icon: null },
    { text: 'HTML', icon: faHtml5 },
    { text: 'CSS', icon: faCss3Alt },
    { text: 'JavaScript', icon: faJs },
    { text: 'React', icon: faReact },
    { text: 'Node.js', icon: faNodeJs },
    { text: 'Express.js', icon: faServer },
    { text: 'PHP', icon: faPhp },
    { text: <><br /><strong>Exposé à:</strong></>, icon: null },
    { text: 'Docker', icon: faDocker },
    { text: 'Adobe Illustrator', icon: faPaintBrush },
    { text: <><br /><strong>Actuellement en apprentissage:</strong></>, icon: null },
    { text: 'TypeScript', icon: faCode },
    { text: 'Python', icon: faPython },
    { text: 'Next.js', icon: faReact },
  ], []);

  const createObserver = useCallback((setIsVisible) => {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.65 }
    );
  }, []);

  useEffect(() => {
    const observer1 = createObserver(setIsVisible1);
    const observer2 = createObserver(setIsVisible2);
    const current1 = terminal1Ref.current;
    const current2 = terminal2Ref.current;

    if (current1) observer1.observe(current1);
    if (current2) observer2.observe(current2);

    return () => {
      if (current1) observer1.unobserve(current1);
      if (current2) observer2.unobserve(current2);
    };
  }, [createObserver]);

  const animateText = useCallback((fullText, setText, isArray = false) => {
    let index = 0;
    const typingSpeed = 1;

    const timer = setInterval(() => {
      if (isArray) {
        setText(fullText.slice(0, index + 1));
      } else {
        setText(fullText.slice(0, index));
      }
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, typingSpeed);

    return timer;
  }, []);

  useEffect(() => {
    if (isVisible1) {
      const timer1 = animateText(fullText1, setText1);
      return () => clearInterval(timer1);
    }
  }, [isVisible1, fullText1, animateText]);

  useEffect(() => {
    if (isVisible2) {
      const timer2 = animateText(fullText2, setText2, true);
      return () => clearInterval(timer2);
    }
  }, [isVisible2, fullText2, animateText]);

  return (
    <section id="about">
      <div className="terminal" ref={terminal1Ref}>
        <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="terminal-body">
          <p className="command">alexmarolleau $ cd aboutalex</p>
          <p className="response"><span className="typing-text">{text1}</span><span className="cursor">|</span></p>
        </div>
      </div>
      <div className="terminal" ref={terminal2Ref}>
        <div className="terminal-header">
          <div className="button red"></div>
          <div className="button yellow"></div>
          <div className="button green"></div>
        </div>
        <div className="terminal-body">
          <p className="command">alexmarolleau $ cd compétences/outils</p>
          <div className="typing-text">
            {text2.map((item, index) => (
              <p key={index}>
                {item.text} {item.icon && <FontAwesomeIcon icon={item.icon} />}
              </p>
            ))}
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

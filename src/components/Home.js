import React, { useEffect } from 'react';
import '../styles/Home.scss';
import profilePicture from '../assets/img/pp_alex.png';

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const span = document.querySelector('.intro h1 .gradient-text');
      const profilePictureContainer = document.querySelector('.profile-picture-container');

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;

      const gradient = `linear-gradient(${xPos + yPos}deg, #f44369, #3e3b92)`;

      // Appliquer le dégradé au prénom
      span.style.background = gradient;
      span.style.backgroundClip = 'text';
      span.style.color = 'transparent';

      // Appliquer le dégradé à la photo de profil
      profilePictureContainer.style.background = gradient;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <div className="profile-picture-container">
          <img src={profilePicture} alt="profile-picture" className="profile-picture" />
        </div>
        <div className="intro">
          <h1>Salut, moi c'est <span className="gradient-text">Alex</span> <span role="img" aria-label="wave">👋</span></h1>
          <h2>Je suis un développeur FullStack</h2>
          <ul>
            <li><span role="img" aria-label="coffee">☕</span> Alimenté par le café</li>
            <li><span role="img" aria-label="globe">🌍</span> basé en France</li>
            <li><span role="img" aria-label="briefcase">💼</span> Dev web fullstack</li>
            <li><span role="img" aria-label="email">📧</span> Alex.M79@outlook.com</li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

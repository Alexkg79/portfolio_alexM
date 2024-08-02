import React from 'react';
import '../styles/Home.scss';
import profilePicture from '../assets/img/pp_alex.jpg';

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <img src={profilePicture} alt="profile-picture" className="profile-picture" />
        <div className="intro">
          <h1>Salut, moi c'est <span>Alex</span> <span role="img" aria-label="wave">👋</span></h1>
          <h2>Je suis un développeur FullStack</h2>
          <ul>
            <li><span role="img" aria-label="coffee">☕</span> Alimenté par le café</li>
            <li><span role="img" aria-label="globe">🌍</span> basé en France</li>
            <li><span role="img" aria-label="briefcase">💼</span> Dev web fullstack</li>
            <li><span role="img" aria-label="email">📧</span> Alex.M79@outlook.com</li>
          </ul>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

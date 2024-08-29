import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styles/Home.scss';
import profilePicture from '../assets/img/pp_alex.webp';

const Home = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <section id="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3e3b92",
            },
            links: {
              color: "#f44369",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="content-animation">
        <div className="home-container">
          <div className="profile-picture-container">
            <img src={profilePicture} alt="Alex" className="profile-picture" />
          </div>
          <div className="intro">
            <h1>
              Salut, moi c'est <span className="gradient-text">Alex</span> <span className="waving-hand">👋</span>
            </h1>
            <h2>Je suis un développeur FullStack</h2>
            <ul>
              <li>☕ Alimenté par le café</li>
              <li>🌍 basé en France</li>
              <li>💼 Dev web fullstack</li>
              <li>📧 Alex.M79@outlook.com</li>
            </ul>
            <div className="social-icons">
              <a href="https://www.facebook.com/Alex.Marolleau/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/alexmarol_" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/Alexkg79" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/alex-marolleau/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/mrl_alex" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
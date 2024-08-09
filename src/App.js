import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <section id="about-me-title">
          <h2>About Me</h2>
        </section>
        <About />
        <section id="projects-title">
          <h2>Portfolio</h2>
        </section>
        <Projects />
        <section id="contact-title">
          <h2>Contact</h2>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

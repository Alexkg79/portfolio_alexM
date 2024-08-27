import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import './styles/App.scss';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main>
        <div className="content-wrapper">
          <Home />
          <TitleCard title="About Me" />
          <About />
          <TitleCard title="Portfolio" />
          <Projects isDarkMode={isDarkMode} />
          <TitleCard title="Contact" />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

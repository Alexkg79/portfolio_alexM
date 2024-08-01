import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Competence from './components/Competence';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Competence />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

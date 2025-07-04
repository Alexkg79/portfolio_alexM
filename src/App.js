import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CTA from './components/CTA';
import Philosophy from './components/Philosophy';

import './styles/App.scss';

const App = () => {
  return (
    <div className="App">      
      <div className="content-container">
        <Header />
        <main>
            <Hero />
            <About />
            <Philosophy />
            <Projects />
            <CTA />
            <Contact />
        </main>
        <Footer />
      </div>
      <Analytics />
    </div>
  );
};

export default App;
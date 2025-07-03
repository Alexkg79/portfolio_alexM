import React, { useEffect, useRef, useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import photo from '../assets/img/pp_alex.webp';
import '../styles/Hero.scss';

// Fonction pour charger un script dynamiquement
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export default function Hero() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // On définit les DEUX configurations Mobile et Desktop
    const desktopConfig = {
      mouseControls: true, touchControls: true, scale: 1.00,
      color: 0x216bff, backgroundColor: 0x111827,
      points: 12.00, maxDistance: 22.00, spacing: 18.00
    };

    const mobileConfig = {
      mouseControls: false, touchControls: true, scale: 1.00,
      color: 0x216bff, backgroundColor: 0x111827,
      points: 5.00,
      maxDistance: 12.00,
      spacing: 25.00
    };
    
    const activeConfig = window.innerWidth > 768 ? desktopConfig : mobileConfig;

    if (!vantaEffect) {
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
        .then(() => loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"))
        .then(() => {
          if (window.VANTA) {
            const effect = window.VANTA.NET({
              el: vantaRef.current,
              ...activeConfig
            });
            setVantaEffect(effect);
          }
        });
    }
    return () => {
      if (vantaEffect && vantaEffect.destroy) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <LazyMotion features={domAnimation}>
      <section id='hero' className="hero-section" ref={vantaRef}>
        <div className="hero-content">
          <motion.div
            className="profile-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={photo}
              alt="Photo de profil"
              className="profile-image"
              fetchpriority="high"
              loading='lazy'
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Développeur Front-End
            <motion.span
              className="accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              spécialisé en JavaScript/React
            </motion.span>
          </motion.h1>

          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Je conçois et développe des expériences web modernes, performantes et intuitives.
          </motion.p>
        </div>
      </section>
    </LazyMotion>
  );
}

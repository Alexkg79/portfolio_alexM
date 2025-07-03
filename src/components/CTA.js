import React from 'react';
import '../styles/CTA.scss';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Intéressé(e) par une collaboration ?</h2>
        <p className="cta-description">
          Que vous ayez une question, une proposition de projet, ou simplement l'envie de discuter, ma messagerie vous est ouverte. N'hésitez pas à me contacter.
        </p>
        <a href="#contact" className="btn btn-primary cta-button">
          Discutons-en !
        </a>
      </div>
    </section>
  );
}
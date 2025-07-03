import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import TitleCard from './TitleCard';
import '../styles/Contact.scss';

// Le composant pour la pop-up de statut
const StatusPopup = ({ message, isError }) => {
  if (!message) return null;
  return <div className={`status-popup ${isError ? 'error' : 'success'}`}>{message}</div>;
};


export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', isError: false });
  // Fonction pour envoyer l'email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_xojp9qj';
    const templateID = 'template_tyxhmq5';
    const publicKey = 'vlO5xijGxPGY3T0jT';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus({ message: 'Message envoyé avec succès !', isError: false });
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus({ message: 'Une erreur est survenue. Veuillez réessayer.', isError: true });
      });
    setTimeout(() => {
      setStatus({ message: '', isError: false });
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <TitleCard title="Me Contacter" />
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="from_name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="from_email" placeholder="Votre adresse email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Votre message ici..." required></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </div>
        </form>
      </div>
      <StatusPopup message={status.message} isError={status.isError} />
    </section>
  );
}
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.scss';
emailjs.init("vlO5xijGxPGY3T0jT");

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    from_message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, 
      [name]: value,
    }));
  };
  // Config EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm('service_xojp9qj', 'template_snu35cq', e.target, 'vlO5xijGxPGY3T0jT')
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      setFormData({ from_name: '', from_email: '', from_message: '' });
    }, (error) => {
      console.log(error.text);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name">Nom</label>
            <input 
              type="text" 
              id="from_name" 
              name="from_name" 
              value={formData.from_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input 
              type="email" 
              id="from_email" 
              name="from_email" 
              value={formData.from_email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="from_message">Message</label>
            <textarea 
              id="from_message" 
              name="from_message" 
              value={formData.from_message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
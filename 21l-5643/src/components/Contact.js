// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Reset the submitted message after a few seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate a backend or third-party service
    // For demonstration, we simply show a success message.
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email:</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send Message</button>
      </form>
      {submitted && <p className="success-msg">Thank you for reaching out!</p>}
      <p>For more information, search online for integrating forms with your website.</p>
    </section>
  );
};

export default Contact;

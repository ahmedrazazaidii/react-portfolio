// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer">
      <h3>Follow Me</h3>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          </li>
        ))}
      </ul>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
};

export default Footer;

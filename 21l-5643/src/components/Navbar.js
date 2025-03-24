// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;

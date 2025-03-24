// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = ({ name, bio }) => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
      <h1>Welcome, I'm {name}</h1>
      <p>{bio}</p>
      <a href="#projects" className="cta-btn">View My Work</a>
    </motion.section>
  );
};

export default HeroSection;

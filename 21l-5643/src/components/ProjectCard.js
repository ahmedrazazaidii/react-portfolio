// src/components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, github }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={title} className="project-image" />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

// src/components/DarkModeToggle.js
import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;

// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DataEntryPage from './components/DataEntryPage';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  // State for the portfolio data entered by the user
  const [portfolioData, setPortfolioData] = useState(null);
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Handle data submission from the data entry page
  const handleDataSubmit = (data) => {
    setPortfolioData(data);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      { !portfolioData ? (
        // Render Data Entry Page if data is not provided yet
        <DataEntryPage onSubmit={handleDataSubmit} />
      ) : (
        // Once data is provided, display the portfolio
        <>
          <Navbar />
          <HeroSection name={portfolioData.name} bio={portfolioData.shortBio} />
          <AboutMe 
            profilePic={portfolioData.profilePic} 
            skills={portfolioData.skills} 
            description={portfolioData.aboutMe}
          />
          <Projects projectsData={portfolioData.projects} />
          <Contact />
          <Footer socialLinks={portfolioData.socialLinks} />
        </>
      )}
    </div>
  );
}

export default App;



// src/components/DataEntryPage.js
import React, { useState } from 'react';

const DataEntryPage = ({ onSubmit }) => {
  // States for each section of the data entry form
  const [name, setName] = useState('');
  const [shortBio, setShortBio] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [skills, setSkills] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [projects, setProjects] = useState([
    { title: '', description: '', image: '', github: '' },
  ]);
  const [socialLinks, setSocialLinks] = useState([{ name: '', url: '' }]);

  // Handler for adding another social link
  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { name: '', url: '' }]);
  };

  // Handler for adding another project
  const addProject = () => {
    setProjects([...projects, { title: '', description: '', image: '', github: '' }]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert comma separated skills into an array
    const skillsArray = skills.split(',').map(skill => skill.trim());
    onSubmit({
      name,
      shortBio,
      profilePic,
      skills: skillsArray,
      aboutMe,
      projects,
      socialLinks,
    });
  };

  return (
    <div className="data-entry-container">
      <h2>Enter Your Portfolio Details</h2>
      <form onSubmit={handleSubmit}>
        {/* Student's Introductory Data */}
        <div>
          <label>Name:</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Short Bio:</label>
          <textarea value={shortBio} onChange={e => setShortBio(e.target.value)} required />
        </div>

        {/* About Me Section */}
        <div>
          <label>Profile Picture URL:</label>
          <input value={profilePic} onChange={e => setProfilePic(e.target.value)} required />
        </div>
        <div>
          <label>Skills (comma separated):</label>
          <input value={skills} onChange={e => setSkills(e.target.value)} required />
        </div>
        <div>
          <label>About Me Description:</label>
          <textarea value={aboutMe} onChange={e => setAboutMe(e.target.value)} required />
        </div>

        {/* Projects Section */}
        <h3>Projects</h3>
        {projects.map((proj, index) => (
          <div key={index} className="project-entry">
            <label>Project Title:</label>
            <input
              value={proj.title}
              onChange={e => {
                const newProjects = [...projects];
                newProjects[index].title = e.target.value;
                setProjects(newProjects);
              }}
              required
            />
            <label>Project Description:</label>
            <textarea
              value={proj.description}
              onChange={e => {
                const newProjects = [...projects];
                newProjects[index].description = e.target.value;
                setProjects(newProjects);
              }}
              required
            />
            <label>Project Image URL:</label>
            <input
              value={proj.image}
              onChange={e => {
                const newProjects = [...projects];
                newProjects[index].image = e.target.value;
                setProjects(newProjects);
              }}
              required
            />
            <label>GitHub Link:</label>
            <input
              value={proj.github}
              onChange={e => {
                const newProjects = [...projects];
                newProjects[index].github = e.target.value;
                setProjects(newProjects);
              }}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addProject}>Add Another Project</button>

        {/* Social Media Section */}
        <h3>Social Media Links</h3>
        {socialLinks.map((link, index) => (
          <div key={index} className="social-entry">
            <label>Social Media Name:</label>
            <input
              value={link.name}
              onChange={e => {
                const newLinks = [...socialLinks];
                newLinks[index].name = e.target.value;
                setSocialLinks(newLinks);
              }}
              required
            />
            <label>URL:</label>
            <input
              value={link.url}
              onChange={e => {
                const newLinks = [...socialLinks];
                newLinks[index].url = e.target.value;
                setSocialLinks(newLinks);
              }}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addSocialLink}>Add Social Media</button>

        <button type="submit">Submit / Generate Portfolio</button>
      </form>
    </div>
  );
};

export default DataEntryPage;

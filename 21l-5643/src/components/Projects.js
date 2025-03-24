// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = ({ projectsData }) => {
  // Local state for projects to allow reordering
  const [projects, setProjects] = useState([]);

  // Simulate dynamic fetching (or use your own API endpoint)
  useEffect(() => {
    // For example, you could fetch data from a GitHub JSON endpoint here.
    // For now, we use the passed projectsData.
    setProjects(projectsData);
  }, [projectsData]);

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProjects(items);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {projects.map((project, index) => (
                <Draggable key={index} draggableId={`project-${index}`} index={index}>
                  {(provided) => (
                    <div 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard {...project} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default Projects;

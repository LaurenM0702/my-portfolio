import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-card">
        <h2>PlanIt</h2>
        <p>Task management web application.</p>
        <div className="project-links">
          <a href="#">View Website</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h2>Recall Ride</h2>
        <p>Memory capsule React app with interactive map visualization.</p>
        <div className="project-links">
          <a href="#">View Website</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
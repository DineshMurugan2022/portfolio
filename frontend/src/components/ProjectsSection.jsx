import React from 'react';
import { projects } from '../data/projects';
import ProjectCard3D from './ProjectCard3D';
import './ProjectsSection.css';

const ProjectsSection = () => {
  // No modal state needed anymore

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Explore a collection of my recent work, featuring full-stack applications,
            interactive designs, and complex system integrations.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={project.id || index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import ProjectsPanel from './ProjectsPanel';
import '../styles/Projects.component.css';

const Projects = () => (
  <section className="section" id="projects">
    <div className="shell">
      <div className="section-head">
        <span className="section-index">03 / </span>
        <h2 className="section-title">Projects</h2>
        <span className="section-rule" />
      </div>
      <ProjectsPanel />
    </div>
  </section>
);

export default Projects;

import React from 'react';
import ExperiencePanel from './ExperiencePanel';
import '../styles/Experience.component.css';

const Experience = () => (
  <section className="section" id="experience">
    <div className="shell">
      <div className="section-head">
        <span className="section-index">02 / </span>
        <h2 className="section-title">Experience</h2>
        <span className="section-rule" />
      </div>
      <ExperiencePanel />
    </div>
  </section>
);

export default Experience;

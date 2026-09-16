import React from 'react';
import Reveal from './Reveal';
import '../styles/ProjectsPanel.component.css';

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LaunchIcon = () => (
  <svg viewBox="0 0 16 16" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.5 2.5H2.5v11h11v-4" />
    <path d="M9.5 2.5h4v4M13.5 2.5L7 9" />
  </svg>
);

const projects = [
  {
    id: 0,
    name: 'Marine Ecosystem Viewer',
    desc: `Map that displays ocean ecosystem information, such as coral reefs and mammal populations - under development as part of a research project with CBS' Nordic ESG Lab`,
    techs: 'JavaScript, React, CSS',
    github: 'https://github.com/thimomerke/ocean-ecosystem-risk-viewer',
    deploy: 'https://ocean.thimo.me',
  },
  {
    id: 1,
    name: 'Renewables LCOE Calculator',
    desc: `Tool to calculate the levelized cost of electricity (LCOE) for different renewable energy technologies based on geographic location and other parameters`,
    techs: 'Python, Shiny',
    github:
      'https://huggingface.co/spaces/UniMaMISES/LCOE_calculator_shiny/tree/main',
    deploy: 'https://unimamises-lcoe-calculator-shiny.hf.space/',
  },
  {
    id: 2,
    name: 'Strategic CDR Portfolio Model',
    desc: `Model to determine the optimal portfolio of carbon dioxide removal (CDR) technologies for a given set of parameters, such as cost, scalability and permanence; under development as part of my master thesis`,
    techs: 'JavaScript, React, CSS',
    github: 'https://github.com/thimomerke/master-thesis/blob/main/MasterThesisFinal.pdf',
  },
];

const ProjectsPanel = () => (
  <ol className="projects">
    {projects.map((project, i) => (
      <Reveal
        as="li"
        key={project.id}
        className="project"
        delay={Math.min(i * 90, 300)}
      >
        <span className="stripe-bar project-stripe" aria-hidden="true" />

        <div className="project-row">
          <span className="project-index mono mono-sm">
            {String(i + 1).padStart(2, '0')}
          </span>

          <div className="project-main">
            <h3 className="project-title">
              <a
                href={project.deploy || project.github}
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
            </h3>
            <p className="project-desc">{project.desc}</p>
          </div>

          <div className="project-side">
            <span className="project-techs mono mono-sm">{project.techs}</span>
            <span className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`${project.name} source`}
              >
                <GithubIcon />
                <span className="mono mono-sm">src</span>
              </a>
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`${project.name} live version`}
                >
                  <LaunchIcon />
                  <span className="mono mono-sm">live</span>
                </a>
              )}
            </span>
          </div>
        </div>
      </Reveal>
    ))}
  </ol>
);

export default ProjectsPanel;

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectsPanel from './ProjectsPanel'
import '../styles/Projects.component.css';

class Projects extends Component {
  render() {
    return (
      <div className="section" id="projects">
        <Container>
          <Row className="section-heading">
            <span>
              #projects
            </span>
          </Row>
          <Row className="section-content">
            These are some of my personal "pet projects", mostly unrelated to my work and research, but maybe still fun to have a look at.
            <ProjectsPanel></ProjectsPanel>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;

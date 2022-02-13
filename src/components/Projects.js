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
              #software projects
            </span>
          </Row>
          <Row className="section-content">
            <ProjectsPanel></ProjectsPanel>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;

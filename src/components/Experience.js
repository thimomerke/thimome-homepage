import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ExperiencePanel from './ExperiencePanel'
import '../styles/Experience.component.css';

class Experience extends Component {
  render() {
    return (
      <div className="section experience" id="experience">
        <Container>
          <Row className="section-heading">
            <span>
              #experience
            </span>
          </Row>
          <Row className="section-content">
            <ExperiencePanel></ExperiencePanel>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Experience;

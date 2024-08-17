import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Parser from 'html-react-parser';
import '../styles/AboutMe.component.css';

class AboutMe extends Component {
  render() {
    const unima = "<a href='https://www.uni-mannheim.de' target='_blank'>University of Mannheim</a>"
    const cbs = "<a href='https://www.cbs.dk/en' target='_blank'>Copenhagen Business School</a>"
    const linkedin = "<a href='https://www.linkedin.com/in/thimo-merke/' target='_blank'>LinkedIn</a>"
    const email = "<a href='mailto:thimo.merke@students.uni-mannheim.de' target='_blank'>thimo.merke@students.uni-mannheim.de</a>"
    return (
      <div className="section" id="about">
        <Container>
          <Row className="section-heading">
            <span>
              #about me
            </span>
          </Row>
          <Row className="section-content">
            <Col className="about-text">
                <p>I'm a graduate student of business at the {Parser(unima)} and {Parser(cbs)}.</p>
                <p>My main reasearch interests are the techno-economic aspects of renewable energy, carbon removal and other sustainability-related topics. I also do some side projects in programming and photo- and videography.</p>
                <p>In my free time, if I'm not at my PC, I like going hiking, biking, running and pretty much everything everything outdoors. <br />I'm also a huge space nerd #OccupyMars</p>
                <p>You want to talk? Let's connect on {Parser(linkedin)}, or just shoot me an e-mail at {Parser(email)}</p>
            </Col>
            <Col className="about-photo">
                <img src="/thimo.png" alt="Profile"></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutMe;

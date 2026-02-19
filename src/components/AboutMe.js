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
    const email = "<a href='mailto:mail@thimo.me' target='_blank'>mail@thimo.me</a>"
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
                <p>My main reasearch interests are the techno-economic aspects of renewable energy, carbon removal and other energy-related topics. I also do some other, personal coding projects on the side.</p>
                <p>I'm an avid reader, love learning languages, and doing sports such as hiking, biking, running and pretty much everything outdoors. <br />I'm also a huge space nerd #OccupyMars</p>
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

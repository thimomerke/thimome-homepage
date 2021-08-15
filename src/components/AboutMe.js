import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Parser from 'html-react-parser';
import '../styles/AboutMe.component.css';

class AboutMe extends Component {
  render() {
    const unima = "<a href='https://www.uni-mannheim.de'>University of Mannheim</a>"
    const queens = "<a href='https://queensu.ca'>Queen's University</a>"
    const linkedin = "<a href='https://www.linkedin.com/in/thimo-merke/'>LinkedIn</a>"
    const email = "<a href='mailto:thimo.merke@queensu.ca'>thimo.merke@queensu.ca</a>"
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
                <p>I'm a Business Student at the {Parser(unima)} and {Parser(queens)}.</p>
                <p>My main interests are everything tech and entrepreneurship related. I do programming and web design, photography and videography.</p>
                <p>In my free time, if I'm not at my PC, I like going hiking and working out.  Also, I'm a huge space nerd #OccupyMars</p>
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

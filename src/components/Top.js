import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../styles/Top.component.css';

class Top extends Component {
  render() {
    
    const title = "Welcome, I'm"
    const name = "Thimo"
    const subtitle = "I'm a graduate student of business and management from Mannheim, Germany."

    return (
      <div className="home" id="home">
        <Container>
          <Row className="heading">
            <div>
              {title}
              <span className="name"> {name}</span>
            </div>
          </Row>
          <Row className="subheading">
            <div>
              {subtitle}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Top;

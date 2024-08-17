import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../styles/Top.component.css';

class Top extends Component {
  render() {
    
    const title = "Hi, I'm"
    const name = "Thimo"
    const subtitle = "I'm a graduate student of business, finance and accounting from Mannheim, Germany."

    return (
      <div className="home" id="home">
        <Container>
          <Row className="heading">
            <div>
              {title}
              <span className="name"> {name} </span> <img src="/hand.png"  width="70" height="70" alt="Waving hand emoji"></img>
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

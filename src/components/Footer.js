import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../styles/Footer.component.css';

class Footer extends Component {
    render() {
      return (
        <div className="footer">
          <Container>
          <Row className="links">
                <Col>
                <i className="fa fa-copyright symbol"></i>Thimo Merke 2021
                </Col>
                <Col className="d-flex justify-content-center">
                    <a className="fa fa-instagram social symbol" style={{fontSize: "24px"}} href="https://instagram.com/thimo_me" target="_blank" rel="noreferrer"> </a>
                    <a className="fa fa-linkedin social symbol" style={{fontSize: "24px"}} href="https://www.linkedin.com/in/thimo-merke/" target="_blank" rel="noreferrer"> </a>
                </Col>
                <Col className="d-flex flex-row-reverse">
                <a href="/legal">legal notice </a>
                </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default Footer;
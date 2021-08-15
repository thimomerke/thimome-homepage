import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from "react-slideshow-image";
import { images } from './PhotographyImages'
import "react-slideshow-image/dist/styles.css";
import '../styles/Photography.component.css';

const sliderProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    scale: 0.4,
    arrows: false,
};

class Photography extends Component {
    render() {
      return (
        <div className="section" id="photography">
        <Container>
          <Row className="section-heading">
            <span>
              #photography
            </span>
          </Row>
          <Row className="section-content">
            <Col className="photo-slider">
                <Fade {...sliderProperties}>
                    {images.map((each, index) => (
                        <img alt="by Thimo Merke" key={index} style={{ width: "100%" }} src={each} />
                    ))}
                </Fade>
            </Col>
            <Col className="side-text">
                I do all kinds of photography, but I mostly shoot travel and street photos.
                I work with both digital and analog cameras. You can find more of my photography on my photo instagram:
                <a href="https://www.instagram.com/thimo.merke/" target="_blank"> instagram.com/thimo.merke</a>
            </Col>
          </Row>
        </Container>
      </div>
      );
    }
  }
  
  export default Photography;
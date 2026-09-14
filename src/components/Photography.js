import React from 'react';
import { Fade } from 'react-slideshow-image';
import { images } from './PhotographyImages';
import 'react-slideshow-image/dist/styles.css';
import '../styles/Photography.component.css';

// Not currently mounted on any page. Kept in sync with the design system so it
// still works if it goes back into Home.js.
const sliderProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  scale: 0.4,
  arrows: false,
};

const Photography = () => (
  <section className="section" id="photography">
    <div className="shell">
      <div className="section-head">
        <span className="section-index">05 / </span>
        <h2 className="section-title">Photography</h2>
        <span className="section-rule" />
      </div>

      <div className="photo-grid">
        <div className="photo-slider">
          <Fade {...sliderProperties}>
            {images.map((each) => (
              <img alt="by Thimo Merke" key={each} src={each} />
            ))}
          </Fade>
        </div>

        <p className="photo-text">
          I do all kinds of photography, but I mostly shoot travel and street
          photos. I work with both digital and analog cameras. You can find more
          of my photography on my photo instagram:{' '}
          <a
            href="https://www.instagram.com/thimo.merke/"
            target="_blank"
            rel="noreferrer"
          >
            instagram.com/thimo.merke
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Photography;

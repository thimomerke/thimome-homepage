import React from 'react';
import Reveal from './Reveal';
import '../styles/AboutMe.component.css';

const ext = { target: '_blank', rel: 'noreferrer' };

const AboutMe = () => (
  <section className="section" id="about">
    <div className="shell">
      <div className="section-head">
        <span className="section-index">01 / </span>
        <h2 className="section-title">About me</h2>
        <span className="section-rule" />
      </div>

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            I'm an independent researcher, previously a graduate student of
            business at the{' '}
            <a href="https://www.uni-mannheim.de" {...ext}>
              University of Mannheim
            </a>{' '}
            and{' '}
            <a href="https://www.cbs.dk/en" {...ext}>
              Copenhagen Business School
            </a>
            .
          </p>
          <p>
            My main research interests are the techno-economic aspects of
            renewable energy, carbon removal and other energy-related topics. I
            also do some other, personal coding projects on the side.
          </p>
          <p>
            I'm an avid reader, love learning languages, and doing sports such as
            hiking, biking, running and pretty much everything outdoors.
            <br />
            I'm also a huge space nerd #OccupyMars
          </p>
          <p>
            You want to talk? Let's connect on{' '}
            <a href="https://www.linkedin.com/in/thimo-merke/" {...ext}>
              LinkedIn
            </a>
            , or just shoot me an e-mail at{' '}
            <a href="mailto:mail@thimo.me">mail@thimo.me</a>
          </p>
        </Reveal>

        <Reveal className="about-media" delay={120}>
          <figure className="about-figure">
            <div className="about-photo">
              <img src="/thimo.png" alt="Portrait of Thimo Merke" />
            </div>
            <div className="stripe-bar" />
            <figcaption className="mono mono-sm">
              <span>Thimo Merke</span>
              <span>Munich, DE</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutMe;

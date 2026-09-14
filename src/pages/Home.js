import React from 'react';
import Top from '../components/Top';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Top />

    <div className="rail rail-left" aria-hidden="true">
      <a className="rail-text" href="mailto:mail@thimo.me" tabIndex={-1}>
        mail@thimo.me
      </a>
    </div>
    <div className="rail rail-right" aria-hidden="true">
      <span className="rail-text">49.49&deg;N 8.47&deg;E</span>
    </div>

    <main id="content">
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </>
);

export default Home;

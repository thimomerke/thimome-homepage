import React from 'react';
import Top from '../components/Top';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => (
  <>
    <Top />

    <main id="content">
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </>
);

export default Home;

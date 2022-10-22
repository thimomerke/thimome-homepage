import Top from '../components/Top.js'
import AboutMe from '../components/AboutMe.js'
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import '../styles/global.css';

function Home() {
  return (
    <div>
      <div className="main">
        <Top></Top>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default Home;
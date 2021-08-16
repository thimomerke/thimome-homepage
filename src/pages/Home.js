import TopNavbar from '../components/TopNavbar.js'
import Top from '../components/Top.js'
import AboutMe from '../components/AboutMe.js'
import Experience from '../components/Experience.js';
import Projects from '../components/Projects.js';
import Photography from '../components/Photography.js';
import Footer from '../components/Footer.js';
import '../styles/global.css';

function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="main">
        <Top></Top>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Photography></Photography>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
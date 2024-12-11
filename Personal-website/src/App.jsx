import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faUpwork,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "./Components/SocialIcons/SocialIcons";

function App() {
  const date = new Date();

  return (
    <>
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        <Resume />
        <Skills />
        <Portfolio />
        {/* <Services /> */}
        <Contact />
      </main>

      <footer>
        <SocialIcons />
        <p>
          <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()} Muhammed
          Ferhan - All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;

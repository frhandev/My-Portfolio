import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Resume from './Components/Resume/Resume'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faUpwork, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

function App() {

  const date = new Date;

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Resume />
        <Skills />
        <Portfolio />
        <Services />
        <Contact />
      </main>

      <footer>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/muhammed-ferhan-793196252/"
            className="socialIconContainer"
            target='_blank'>
            <p ><FontAwesomeIcon icon={faLinkedinIn} /></p>
          </a>

          <a href="https://www.instagram.com/mohammad_farhan53/"
            className="socialIconContainer"
            target='_blank'>
            <p ><FontAwesomeIcon icon={faInstagram} /></p>
          </a>

          <a href="https://www.upwork.com/freelancers/~01c14824b86a56ad1a?mp_source=share"
            className="socialIconContainer"
            target='_blank'>
            <p ><FontAwesomeIcon icon={faUpwork} /></p>
          </a>

          <a href="https://github.com/frhandev"
            className="socialIconContainer"
            target='_blank'>
            <p ><FontAwesomeIcon icon={faGithub} /></p>
          </a>
        </div>
        <p>
          <FontAwesomeIcon icon={faCopyright} /> {date.getFullYear()} Muhammed Ferhan - All Rights Reserved
        </p>
      </footer>
    </>
  )
}

export default App

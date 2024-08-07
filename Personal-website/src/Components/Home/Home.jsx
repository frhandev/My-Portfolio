import React from 'react'
import me from '../../assets/Me.png'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faUpwork, faGithub } from '@fortawesome/free-brands-svg-icons'


const Home = () => {
    return (
        <section className='home' id='Home'>
            <img src={me} alt="me" />
            <div className='homeText'>
                <h3>Hello everybody, I'm</h3>
                <h1>Muhammed Ferhan</h1>
                <h2><span>Front-end</span> developer</h2>
            </div>

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
        </section>
    )
}

export default Home

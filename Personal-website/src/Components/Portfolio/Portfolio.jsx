import React from 'react'
import ProjectCard from './ProjectCard'
import './Portfolio.css'
import p1 from '../../assets/project1.jpg'
import p2 from '../../assets/project2.jpg'
import p3 from '../../assets/project3.jpg'

const Portfolio = () => {
    return (
        <section id='Portfolio' className='portfolio'>
            <h2>Portfolio</h2>
            <div className='cards'>
                <ProjectCard name={`Game developer Portfolio`} link={`https://frhandev.netlify.app/`} img={p1} desc={"A portfolio for a Unity game developer designed using HTML & CSS, JavaScript, and React."} />
                <ProjectCard name={`RTX 3060 landing page`} link={`https://rtx3060landingpage.netlify.app/`} img={p3} desc={"A fictional product landing page for a RTX 3060 designed using HTML & CSS."} />
                <ProjectCard name={`Vitality Gym landing page`} link={`https://vitality-gym.netlify.app/`} img={p2} desc={"A landing page for a fictional fitness gym designed using HTML, CSS, JavaScript, and React."} />

            </div>
        </section>
    )
}

export default Portfolio

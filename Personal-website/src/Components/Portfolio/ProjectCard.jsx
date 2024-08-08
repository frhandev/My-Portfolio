import React from 'react'
import './Portfolio.css'

const ProjectCard = ({ img, name, desc, link }) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
    }

    return (
        <div className='projectCard' style={bgImg}>
            <div className="content">
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href={link} target='_blank'>See Project</a>
            </div>
        </div>
    )
}

export default ProjectCard

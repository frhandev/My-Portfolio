import React from 'react'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import ResumeCard from './ResumeCard'

const Resume = () => {
    return (
        <section className='resume' id='Resume'>
            <h2>Education & Experience</h2>
            <div className="resumeCards">
                <ResumeCard />
                <ResumeCard
                    type={faBriefcase}
                    company='Upwork'
                    title='Front-end freelancer'
                    time='2024-current' />

            </div>
        </section >
    )
}

export default Resume

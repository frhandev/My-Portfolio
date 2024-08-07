import React from 'react'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const ResumeCard = ({
    type = faSchool,
    company = "Konya Teknik University",
    title = "Computer engineering",
    time = "2022-current"
}) => {
    return (
        <div className="resumeCard">
            <h3><FontAwesomeIcon icon={type} /></h3>
            <h4>{company}</h4>
            <p>{title}</p>
            <p>{time}</p>
        </div>
    )
}

export default ResumeCard

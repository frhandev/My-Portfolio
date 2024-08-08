import React from 'react'
import SkillBar from './SkillBar'
import "./Skills.css"
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {

    return (
        <section id='Skills' className='skills'>
            <h2>Skills</h2>
            <div className="skillBarsContainer">
                <SkillBar skillName={`HTML`} logo={faHtml5} skillPerc={`100%`} />
                <SkillBar skillName={`CSS`} logo={faCss3} skillPerc={`100%`} />
                <SkillBar skillName={`Javascript`} logo={faJs} skillPerc={`90%`} />
                <SkillBar skillName={`React.js`} logo={faReact} skillPerc={`80%`} />
                <SkillBar skillName={`Problem Solving`} logo={faCode} skillPerc={`70%`} />
            </div>
        </section>
    )
}

export default Skills

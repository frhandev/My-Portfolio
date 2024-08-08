import React from 'react'
import './Services.css'
import ServiceCard from './ServiceCard'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.png'

const Services = () => {
    return (
        <section id='Services' className='services'>
            <h2>Services</h2>
            <div className="serviecesContainer">
                <ServiceCard sImg={s1} name={`Landing Page developement`} link={`https://www.upwork.com/services/product/development-it-a-perfect-landing-page-for-your-brand-1820353003148922592?ref=project_share`} />
                <ServiceCard sImg={s2} name={`Portfolio Page developement`} link={`https://www.upwork.com/services/product/development-it-a-perfect-portfolio-that-will-get-you-hired-1821451159953414253?ref=project_share`} />
            </div>
        </section>
    )
}

export default Services

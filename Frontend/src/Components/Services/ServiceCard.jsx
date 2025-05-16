import React from 'react'
import './Services.css'

const ServiceCard = ({ sImg, name, link }) => {
    const bgImg = {
        backgroundImage: `url(${sImg})`,
    }

    return (
        <div className='serviceCard' style={bgImg}>
            <div className="content">
                <h3>{name}</h3>
                <a target='_blank' href={link}>Buy Now!</a>
            </div>
        </div>
    )
}

export default ServiceCard

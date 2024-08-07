import React, { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [active, setActive] = useState(`navLinks`)

    const handleClick = () => {
        if (active == "navLinks") {
            setActive(`navLinks` + ` ` + `active`);
        } else {
            setActive(`navLinks`);
        }
    }

    return (
        <header>
            <nav>
                <a href=""><h1>Muhammed</h1></a>

                <a onClick={handleClick} className='navToggler'><FontAwesomeIcon icon={faBars} /></a>

                <div className={active}>
                    <a onClick={handleClick} className='navToggler'><FontAwesomeIcon icon={faX} /></a>
                    <a href="#Home" className="navLink">Home</a>
                    <a href="#About" className="navLink">About</a>
                    <a href="#Resume" className="navLink">Resume</a>
                    <a href="#Skills" className="navLink">Skills</a>
                    <a href="#Portfolio" className="navLink">Portfolio</a>
                    <a href="#Services" className="navLink">Services</a>
                    <a href="#Contact" className="navLink">Contact</a>
                </div>

            </nav>
        </header>
    )
}

export default Navbar

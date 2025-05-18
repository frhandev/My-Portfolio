/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState(`navLinks`);

  const [opacity, setOpacity] = useState(``);

  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    if (window.scrollY != 0) {
      setOpacity(`navActive`);
    } else {
      setOpacity(``);
    }
  }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (active == "navLinks") {
      setActive(`navLinks` + ` ` + `active`);
      setIsActive(true);
    } else {
      setActive(`navLinks`);
      setIsActive(false);
    }
  };

  return (
    <header>
      <nav className={opacity}>
        <a href="">
          <h1>Muhammed</h1>
        </a>

        {isActive ? (
          <div onClick={handleClick} className="navLinksCloser"></div>
        ) : (
          <div></div>
        )}
        <a onClick={handleClick} className="navToggler burger">
          <FontAwesomeIcon icon={faBars} />
        </a>

        <div className={active}>
          <a onClick={handleClick} className="navToggler x">
            <FontAwesomeIcon icon={faX} />
          </a>
          <a href="#Home" className="navLink">
            Home
          </a>
          <a href="#Resume" className="navLink">
            Resume
          </a>
          <a href="#Certifications" className="navLink">
            Certifications
          </a>
          <a href="#Skills" className="navLink">
            Skills
          </a>
          <a href="#Portfolio" className="navLink">
            Portfolio
          </a>
          <a href="#Contact" className="navLink">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import { GrHomeRounded, GrContactInfo } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { BiBriefcaseAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <div className="home nav-link">
          <a href="#home">
            Home
            <GrHomeRounded />
          </a>
        </div>
        <div className="about nav-link">
          <a href="#about">
            About
            <BsPersonCircle />
          </a>
        </div>
        <div className="projects nav-link">
          <a href="#projects">
            Projects
            <BiBriefcaseAlt2 />
          </a>
        </div>
        <div className="contact nav-link">
          <a href="#contact">
            Contact
            <GrContactInfo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

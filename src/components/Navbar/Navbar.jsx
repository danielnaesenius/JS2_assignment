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
          <a href="#">
            Home
            <GrHomeRounded />
          </a>
        </div>
        <div className="about nav-link">
          <a href="#">
            About
            <BsPersonCircle />
          </a>
        </div>
        <div className="projects nav-link">
          <a href="#">
            Projects
            <BiBriefcaseAlt2 />
          </a>
        </div>
        <div className="contact nav-link">
          <a href="#">
            Contact
            <GrContactInfo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

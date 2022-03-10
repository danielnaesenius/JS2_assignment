import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <div className="home nav-link">
          <a href="#">
            Home
            <img src="" alt="icon" />
          </a>
        </div>
        <div className="about nav-link">
          <a href="#">
            About
            <img src="" alt="icon" />
          </a>
        </div>
        <div className="projects nav-link">
          <a href="#">
            Projects
            <img src="" alt="icon" />
          </a>
        </div>
        <div className="contact nav-link">
          <a href="#">
            Contact
            <img src="" alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

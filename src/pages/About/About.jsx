import React from "react";
import "./About.css";
import pic from "../../resources/avatar.svg";

function About() {
  return (
    <div className="about-page" id="about">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-me">
        <div className="about-img-container">
          <img src={pic} alt="Daniel Profile Picture" />
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "./About.css";
import pic from "../../resources/avatar.svg";
import content from "../../resources/aboutText.js";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

function About({ title, location, text }) {
  return (
    <div className="about-page" id="about">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="about-me">
        <div className="about-img-container">
          <img src={pic} alt="Daniel Profile Picture" />
        </div>
        <div className="text-container">
          <h2>{content["title"]}</h2>
          <p className="bold">{content["location"]}</p>
          <p>{content["text"]}</p>
          {content["skills"].map((skill) => {
            console.log(skill);
            return <li>{skill}</li>;
          })}
          <p>{content["end"]}</p>
        </div>
        <div className="icon-container">
          <a href="https://twitter.com/?lang=en" target="_blank">
            <FiTwitter className="icon-media-about" />
          </a>

          <a href="https://github.com/danielnaesenius" target="_blank">
            <AiFillGithub className="icon-media-about" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank">
            <AiFillLinkedin className="icon-media-about" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

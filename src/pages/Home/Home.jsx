import React from "react";
import "./Home.css";
import avatar from "../../resources/avatar.svg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

function Home() {
  return (
    <div className="home-page" id="home">
      <div className="hero-content">
        <div className="hero-img">
          <div className="layer"></div>
          <img src={avatar} alt="" />
          <div className="hero-text">
            <div className="icon-container">
              <a href="https://twitter.com/?lang=en" target="_blank">
                <FiTwitter className="icon-media" />
              </a>

              <a href="https://github.com/danielnaesenius" target="_blank">
                <AiFillGithub className="icon-media" />
              </a>

              <a href="https://www.linkedin.com/" target="_blank">
                <AiFillLinkedin className="icon-media" />
              </a>
            </div>

            <h1>Welcome to my portfolio!</h1>
            <p>
              I am Daniel. This page is my portfolio where I will upload my
              future projects and this is the perfect place to get to know me.
              This project is currently a work in progress and will be adding
              more content and tweaks in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

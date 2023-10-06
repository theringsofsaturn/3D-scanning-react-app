/* eslint-disable no-unused-vars */
import React from "react";

import { images } from "../../assets/ImpoerImages";

//  css file
import "./navbar.css";
const navbar = () => {
  return (
    <>
      <nav className="sticky">
        <div className="navbar">
          <div className="container-fluid nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              <img src={images.BlacklLogo} height="60" width="60" />
            </div>
            <div className="menu-items">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>OUR Offerings</li>
              <li>WORK</li>
              <li>VIDEO</li>
              <li>CONTACT</li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;

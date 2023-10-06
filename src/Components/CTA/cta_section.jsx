/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { images } from "../../assets/ImpoerImages";
import "./cta_section.css";

const cta_section = () => {
  return (
    <>
      <div className="cta">
        <div className="cta_section">
          <div className="cta_image">
            <img src={images.AboutUs} alt="cta image" />
          </div>
          <div className="cta_content">
            <h1 className="heading-text">Get In Touch</h1>
            <p className="content-text">
              Ready to experience the future of spatial visualization? Request a
              demo or a personalized quote, and let ThriD transform the way you
              see spaces.
            </p>
            <p className="content-text">
              Immerse yourself in the world of ThriD by watching our videos and
              demos. See firsthand how our technology revolutionizes spatial
              exploration.
            </p>
            <button href="#contact">Request a Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default cta_section;

/* eslint-disable no-unused-vars */
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";

// css file
import "./Footer.css";
import "animate.css";
const Footer = () => {
  return (
    <>
      <div className="site_footer">
        <div className="social_media_icons">
          <h1 className="heading-text">Follow us</h1>
          {/* <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a> 
            <a href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div> */}
          <div className="wrapper center-div">
            <div className="button">
              <div className="icon">
                <a
                  href="https://www.facebook.com/techinsider/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Facebook</span>
            </div>
            <div className="button">
              <div className="icon">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Twitter</span>
            </div>
            <div className="button">
              <div className="icon">
                <a
                  href="https://www.instagram.com/graphicdesignersgroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Instagram</span>
            </div>

            <div className="button">
              <a href="mailto:emiliankasemi@gmail.com">
                <div className="icon">
                  <EmailRoundedIcon sx={{ fontSize: 40 }} />
                </div>
              </a>
              <span>Gmail</span>
            </div>
            <div className="button">
              <div className="icon">
                <YouTubeIcon sx={{ fontSize: 40 }} />
              </div>
              <span>Youtube</span>
            </div>
          </div>
        </div>
        <div classNameName="copyright_sec">
          {" "}
          <CopyrightIcon />
          2023 Powered by{" "}
          <a
            href="https://www.youtube.com/c/EmilianKasemi"
            target="_blank"
            rel="noopener noreferrer"
            classNameName="animate__animated animate__flash"
          >
            The Rings of Saturn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

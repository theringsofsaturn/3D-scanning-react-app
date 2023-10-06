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
      <hr />
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
          <div class="wrapper center-div">
            <div class="button">
              <div class="icon">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Facebook</span>
            </div>
            <div class="button">
              <div class="icon">
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
            <div class="button">
              <div class="icon">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Instagram</span>
            </div>

            <div class="button">
              <a href="mailto:emiliankasemi@gmail.com">
                <div class="icon">
                  <EmailRoundedIcon sx={{ fontSize: 40 }} />
                </div>
              </a>
              <span>Gmail</span>
            </div>
            <div class="button">
              <div class="icon">
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
              <span>Youtube</span>
            </div>
          </div>
        </div>
        <div className="copyright_sec">
          {" "}
          <CopyrightIcon />
          2023 Powered by{" "}
          <a
            href="https://www.linkedin.com/company/the-rings-of-saturn/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate__animated animate__flash"
          >
            The Rings of Saturn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

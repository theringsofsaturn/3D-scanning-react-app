/* eslint-disable no-unused-vars */
import React from "react";
import Form from "../Form/Form";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <div id="contact" className="contact-container">
        <Form />
        <div>
          <h4 className="heading-text">Contact Us</h4>

          <div className="contact">
            <p>
              <EmailIcon />
              <a href="mailto:emiliankasemi@gmail.com">
                emiliankasemi@gmail.com
              </a>
            </p>
            <p>
              <PhoneIcon />
              <a href="tel:355688097086">(355) 68809 7086</a>
            </p>
            <p>
              <WhatsAppIcon />
              <a
                href="https://api.whatsapp.com/send?phone=355688097086"
                target="_blank"
                rel="noreferrer"
              >
                (355) 68809 7086
              </a>
            </p>
          </div>
          {/* <div class="container">
  <p>We Are </p>
  <section class="animation">
    <div class="first"><div>Versatile</div></div>
    <div class="second"><div>Elegant</div></div>
    <div class="third"><div>3D Experts</div></div>
  </section>
</div> */}
        </div>
        
      </div>
    </>
  );
};

export default ContactUs;

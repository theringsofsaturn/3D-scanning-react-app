import React from "react";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import SignalCellularAltRoundedIcon from "@mui/icons-material/SignalCellularAltRounded";

function Services() {
  return (
    <>
      <div className="services" id="offerings">
        <br></br>
        <h1 className="heading-text">Our Offerings</h1>
        <br></br>
        <div className="service_cards">
          <div className="service one">
            <EmojiObjectsOutlinedIcon
              className="service-icon"
              sx={{ fontSize: 50 }}
            />
            <h4> Diverse Range</h4>
            <p>
              Explore ThriD's diverse range of services, tailored to meet the
              unique needs of industries across the board.
            </p>
            <b>
              <div className="list">
                <li>impedit animi nostrum porro odio?</li>
                <li>impedit animi nostrum </li>
                <li>impedit animi nostrum porro?</li>
              </div>
            </b>
          </div>
          <div className="service tne">
            <SignalCellularAltRoundedIcon
              className="service-icon"
              sx={{ fontSize: 50 }}
            />
            <h4> 3D scanning solutions</h4>
            <p>
              {" "}
              From real estate to architecture, retail to municipal services, we
              offer comprehensive 3D scanning solutions.
            </p>
            <b>
              <div className="list">
                <li>impedit animi porro accusamus odio?</li>
                <li>impedit animi nostrum </li>
                <li> animi nostrum porro accusamus odio?</li>
              </div>
            </b>
          </div>
          <div className="service tne">
            <MapsHomeWorkOutlinedIcon
              className="service-icon"
              sx={{ fontSize: 50 }}
            />
            <h4>Industry-Centric Solutions</h4>
            <p>
              Industry-Centric Solutions: Discover how ThriD's services can
              benefit your industry, whether it's streamlining property
              viewings, aiding in architectural design, or providing virtual
              city tours.
            </p>
            <b>
              <div className="list">
                <li>impedit animi nostrum porro ?</li>
                <li>impedit animi nostrum </li>
                <li>impedit animi nostrum porro odio?</li>
              </div>
            </b>
          </div>
        </div>
      </div>
      <br></br>
      <div className="doted_section"></div>
    </>
  );
}

export default Services;

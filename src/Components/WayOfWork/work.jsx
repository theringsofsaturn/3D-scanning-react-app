import React from "react";
import "./work.css";
import { images } from "../../assets/ImpoerImages";
import DvrOutlinedIcon from "@mui/icons-material/DvrOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import BackupTableRoundedIcon from "@mui/icons-material/BackupTableRounded";

function Work() {
  return (
    <>
      <h1 className="services_heading">How It Works</h1>
      <div className="container1">
        <div className="left">
          <div style={{ width: "auto" }}>
            <div className="section">
              <h4 className="h4 pb-5">
                <span className="icon">
                  <DvrOutlinedIcon color="primary" sx={{ fontSize: 45 }} />
                </span>
                <u>Step 1: ThriD's Scanning Process</u>
              </h4>
              <p className="para">
                {" "}
                Gain insight into the intricacies of our 3D scanning process.
                Our technology seamlessly transforms physical spaces into
                immersive digital environments
              </p>
            </div>
            <div className="section">
              <h4 className="h4 pb-5">
                <span className="icon">
                  <MapsHomeWorkOutlinedIcon
                    color="primary"
                    sx={{ fontSize: 45 }}
                  />
                </span>
                <u>Step 2: Diverse Sectors</u>
              </h4>
              <p className="para">
                {" "}
                ThriD caters to a wide array of industries, from real estate
                agencies looking to save time and resources, to architects
                seeking detailed spatial data.
              </p>
            </div>
            <div className="section">
              <h4 className="h4 pb-5">
                <span className="icon">
                  <BackupTableRoundedIcon
                    color="primary"
                    sx={{ fontSize: 45 }}
                  />
                </span>
                <u>Step 3: Behind the Scenes</u>
              </h4>
              <p className="para">
                {" "}
                Peek behind the scenes to understand the magic of ThriD's
                technology, where precision and innovation come together to
                redefine spatial visualization.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="img" src={images.PierreGallery} />
        </div>
      </div>
    </>
  );
}

export default Work;

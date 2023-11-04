/* eslint-disable no-unused-vars */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

// css file
import "./PopUp.css";

const PopUp = ({ slideData, handleClose }) => {
  if (!slideData) {
    // Handle the case when slideData is undefined
    return null; // or you can render a loading indicator or an error message
  }

  const DescriptionText = ({ description }) => {
    // Convert new lines to array and render each line
    const descriptionLines = description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

    return <div className="text-container">{descriptionLines}</div>;
  };

  const PerformanceText = ({ performance }) => {
    // Regex to match percentage patterns
    const percentageRegex = /(\d+%)/g;

    const performanceLines = performance.split(". ").map((line, index, arr) => {
      const parts = line.split(percentageRegex);
      return (
        <span key={index}>
          {parts.map((part, i) =>
            percentageRegex.test(part) ? (
              <span key={i} className="performance-percentage">
                {part}
              </span>
            ) : (
              part
            )
          )}
          {index < arr.length - 1 ? ". " : ""}
          <br />
        </span>
      );
    });

    return <div className="text-container">{performanceLines}</div>;
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Box id="Modal_Box">
            <div className="modal-content">
              <div className="left-section">
                <DescriptionText description={slideData.description} />
              </div>
              <div className="right-section">
                <div className="performance-text">
                  <Typography variant="body2">
                    <PerformanceText performance={slideData.performance} />
                  </Typography>
                </div>
                <iframe src={slideData.videoUrl} title="example video" />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

// Define PropTypes for validation
PopUp.propTypes = {
  slideData: PropTypes.object.isRequired, // Ensure slideData is an object and required
  handleClose: PropTypes.func.isRequired, // Ensure handleClose is a function and required
};

export default PopUp;

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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {slideData.heading}
            </Typography>
            <img src={slideData.imageUrl} alt={`Slide`} />
            <Typography id="transition-modal-description">
              {slideData.description}
            </Typography>

            {/* Additional content can be added here */}
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

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopUp from "../Pop-Up/PopUp";
import { images } from "../../assets/ImpoerImages";
// css file
import "./Carousel.css";

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default, will be adjusted in media queries
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const slidesData = [
    {
      imageUrl: images.Sezondekor,
      heading: "Slide 1 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.Infissi,
      heading: "Slide 2 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.RealEstate,
      heading: "Slide 3 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.Brianza,
      heading: "Slide 4 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.Newmedia,
      heading: "Slide 5 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.Parlamanti,
      heading: "Slide 6 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      imageUrl: images.Pierre,
      heading: "Slide 7 Heading",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];

  const openModal = (slideIndex) => {
    setSelectedSlide(slideIndex);
    setIsModalOpen(true);
  };

  const closeAndResetModal = () => {
    setSelectedSlide(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="slider-container">
        <h1
          className="heading-text animate__animated animate__fadeIn"
          style={{ color: "white" }}
        >
          Our Services
        </h1>
        <div className="max-w-[1460px] w-full mx-auto">
          <p
            className="content-text  p-4 w-[80%] mx-auto animate__animated animate__fadeIn"
            style={{ color: "white", fontWeight: "300" }}
          >
            ThriD Services: Explore ThriD's diverse range of services, tailored
            to meet the unique needs of industries across the board. From real
            estate to architecture, retail to municipal services, we offer
            comprehensive 3D scanning solutions. Industry-Centric Solutions:
            Discover how ThriD's services can benefit your industry, whether
            it's streamlining property viewings, aiding in architectural design,
            or providing virtual city tours.
          </p>
          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="slide"
                onClick={() => openModal(index)} // Open modal on click
              >
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <h2 className="slide-heading">{slide.heading}</h2>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {isModalOpen && (
        <PopUp
          slideData={slidesData[selectedSlide]}
          handleClose={closeAndResetModal}
        />
      )}
    </>
  );
};

export default Carousel;

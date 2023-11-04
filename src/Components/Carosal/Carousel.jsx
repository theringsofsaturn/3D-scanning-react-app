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
    slidesToShow: 3,
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
      heading: "Residential Real Estate",
      description: `Residential Real Estate
        • Providing 3D Virtual Tours
        • Decrease the time on the market.
        • Increase time spent on websites.
        • Increase the ease for international investors.
        • Accurate representation of properties.
        • Increase commissions.
        
        All-in-One Solutions
        • 3D Virtual Tour, 4K print quality photos, schematic floor plans and guided video tours.
        • Shareable on social media sites.
        • Publish to Google Street View.
        • Embed 3D Spaces on website.
        • Active partnerships with Virtual Staging teams.
        • Enhanced output for the same budget.
        `,
      sector: "Real Estate",
      performance:
        "95% more likely to call about homes with 3D virtual tours. 74% of agents using Matterport win more listings. 26% less time on the market ",
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
    },
    {
      imageUrl: images.Sezondekor,
      heading: "Retail",
      description: `Retail
      • Improve Customer Confidence: By providing a transparent and immersive preview of their physical stores, retailers can instil confidence in customers, making them more likely to make purchases or visit the physical location.
      • Increase Online Conversion Rates: listings with 3D virtual tours receive 50% more views than those without. For retail, this translates to a higher likelihood of converting online visitors into customers, as the interactive tours simulate an in-store experience.
      • Increase Social Media presence: Retailers can leverage this trend by sharing 3D tours on platforms like Facebook and Instagram, creating shareable and viral content that boosts brand visibility.
      • Competitive Advantage: In the retail sector, adopting this technology can provide a distinctive edge over competitors, attracting tech-savvy customers who prefer interactive and visually rich shopping experiences.
       
        All-in-One Solutions
      • 3D Virtual Tour, 4K print quality photos, schematic floor plans and guided video tours.
      • Shareable on social media sites.
      • Publish to Google Street View.
      • Embed 3D spaces on the website.`,
      sector: "Retail",
      performance:
        "95% more likely to call about homes with 3D virtual tours. 74% of agents using Matterport win more listings. 26% less time on the market ",
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
    },
    {
      imageUrl: images.Infissi,
      heading: "Create a Better Booking Experience",
      description: `Create a Better Booking Experience
      • Increase web engagement by as much as 15%
      • Increase conversion to bookings by as much as 14%
      • Get a suite of assets with 3D walkthroughs, 4K print quality photography, and more
      • Share with ease ⁠— it's as easy as sharing a YouTube video


       Attract Event Planners
      • Reduce walk-through requests by providing 3D tours
      • Set client expectations immediately and accurately
      • Provide stakeholders with key success metrics 
      • Produce better-qualified leads for property managers
      • Accelerate the booking process`,
      sector: "Travel & Hospitality",
      // performance: "", there will be no text for for this but instead two images side by side above the video below.
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
    },
    {
      imageUrl: images.RealEstate,
      heading: "Construction",
      description: `Capturing As-Built Construction
        • Create 3D walkthroughs and virtually take anyone immediately to a site or location
        • Eliminate registration markers or manual alignment.
        • Export your point cloud into ReCap® or Revit®
        • Have scans automatically registered and stitched into a textured mesh in hours.
        • Generate OBJ files and point clouds for as-builts and construction documentation.
        
        Building Information Modeling (BIM)
        • Scan tight areas 10 — 15 times faster than with a typical LIDAR scanner.
        • Overlay your point cloud onto your BIM model to conduct verification.
        • Take measurements in difficult to access areas such as pipes, trusses, and ceiling beams.`,
      sector: "Architecture & Engineering",
      performance:
        "82% Agree that having a 3D walkthrough is superior to other alternatives to communicating job site status. 81% Agree that the 3D tours have improved the way they communicate on projects. 89% Agree that reality capture is the future of AEC.",
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
    },
    {
      imageUrl: images.Brianza,
      heading: "Public Sector",
      description: `Enhance Public Safety: 
        • Reduce risk by spending less time on the scene
        • Minimise bias and human error
        • Perform virtual training and enable greater collaboration within virtual spaces
        • Capture as-builts and other documentation for pre-plans, code compliance, and wayfinding
        • Incorporate into courtroom storytelling for  more compelling evidence presentation  for crime/fire scenes
        
        Engage with citizens and community
        • Heritage Preservation: ThriD helps preserve and document historical sites and public spaces, ensuring their legacy is safeguarded for future generations
        • Offer virtual access to high-interest landmarks, venues, and historic sites, available 24/7/365
        • Sustain continuity of operations during emergencies, adverse weather conditions, or other disruptions 
        • Expand accessibility to visitors as well as special-needs/handi-capable people 
        • Improve facility management & operations
        • Automate object recognition of real property asset types, and use Mattertags to label equipment for repairs, maintenance, and training
        • Use 3D indoor mapping to train employees for wayfinding or orientation
        • Optimise emergency planning and response to increase situational awareness for employees and first responders`,
      sector: "Public Sector",
      // performance: "", there will be no text for for this but instead two images side by side above the video below.
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
    },
    {
      imageUrl: images.Parlamanti,
      heading: "Insurance & Restoration",
      description: `Adjusters
      • Create court-admissible documentation with spaces that cannot be manipulated.
      • Adjust jobs remotely and reduce time travelling to sites.
      • Reduce sketch time by up to 70%.
      • Bring the jury to the scene with 3D walkthroughs.
      • Add additional notes and details with Thrid Info point
      • Improve negotiation for clients with the most detailed documentation and background information possible.
      
      Insurance Carriers
      • Improve accuracy and reduce the claim cycle. 
      • Adjust remotely and reduce travel time.
      • Increase operational transparency
      • Boost adjusting quality by enabling adjusters to review and navigate the loss remotely with accurate property dimensions.
      • Improve customer service experience for policyholders by closing claims faster.`,
      sector: "Insurance & Restoration",
      // performance: "", there will be no text for for this but instead two images side by side above the video below.
      videoUrl: "https://youtu.be/mJRuHhKJ2cs?si=GQtqbwSFaO2leLnT",
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
      <div className="slider-container" id="services">
        <h1
          className="heading-text animate__animated animate__fadeIn"
          style={{ color: "white" }}
        >
          Sector Applications
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
                onClick={() => openModal(index)}
              >
                <img
                  src={slide.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <h2 className="slide-heading">{slide.sector}</h2>
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

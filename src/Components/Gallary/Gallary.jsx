/* eslint-disable no-unused-vars */
import React from "react";
import { images } from "../../assets/ImpoerImages";

// css file
import "./Gallary.css";
const Gallary = () => {
  const galleryData = [
    {
      id: 1,
      imageUrl: images.PierreGallery,
      title: "Resort Pool & Tanning Deck",
      ButtonLink: "#",
      buttonText: "Virtual tour",
    },
    {
      id: 2,
      imageUrl: images.PierreGallery,
      title: "Another Gallery Item",
      ButtonLink: "#",
      buttonText: "Explore",
    },
    {
      id: 3,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 3",
      ButtonLink: "#",
      buttonText: "View Details",
    },
    {
      id: 4,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 4",
      ButtonLink: "#",
      buttonText: "Learn More",
    },
    {
      id: 5,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 5",
      ButtonLink: "#",
      buttonText: "Visit Now",
    },
    {
      id: 6,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 6",
      ButtonLink: "#",
      buttonText: "See Gallery",
    },
    {
      id: 7,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 7",
      ButtonLink: "#",
      buttonText: "Take a Tour",
    },
    {
      id: 8,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 8",
      ButtonLink: "#",
      buttonText: "Explore More",
    },
    {
      id: 9,
      imageUrl: images.PierreGallery,
      title: "Gallery Item 9",
      ButtonLink: "#",
      buttonText: "Discover",
    },
  ];

  return (
    <>
      <div className="gallery" id="work">
        <h1 className="heading-text">Our Work</h1>
        <div className="card_box max-w-[1460px] ">
          {galleryData.map((item) => (
            <div className="card" key={item.id}>
              <div className="card__side card__side--front">
                <div
                  className="card__pic"
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  alt={item.imageUrl}
                ></div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__side_content">
                  <p className="card__heading">{item.title}</p>
                  <a href={item.ButtonLink} className="btn btn--white">
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallary;

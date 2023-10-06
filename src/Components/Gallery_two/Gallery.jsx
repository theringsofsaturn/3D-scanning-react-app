/* eslint-disable no-unused-vars */
import React from "react";
import { images } from "../../assets/ImpoerImages";

// css file
import "./Gallery.css";
const Gallary = () => {
  const galleryData = [
    {
      id: 1,
      imageUrl: images.PierreGallery,
      title: "Resort Pool ",
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
      {/* <div className="gallery" id="work">
        <h1 className="heading-text">Our Work</h1>
        <div className="card_box max-w-[1460px] ">
        <div className="card">
  {galleryData.map((item) => (
    <>
    <div className="face face1" key={item.id}>
      <div className="content">
        <img src={item.imageUrl} alt={item.title} />
        <h3>{item.title}</h3>
      </div>
    </div>
    <div className="face face2">
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
          cumque minus iste veritatis provident at.
        </p>
        <a href={item.ButtonLink}>{item.buttonText}</a>
      </div>
    </div>
    </>
  ))}
</div>
        </div>
      </div> */}
       <div className="gallery" id="work">
        <h1 className="heading-text">Our Work</h1>
        <div className="card_box max-w-[1460px] ">
      <div className="card-container">
  {galleryData.map((item) => (
    <article className="card" key={item.id}>
      <img
        className="card__background"
        src={item.imageUrl}
        alt={`Photo of ${item.title}`}
        width="400"
        height="393"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{item.title}</h2>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
            labore laudantium deserunt fugiat numquam.
          </p>
        </div>
        <button className="card__button">{item.buttonText}</button>
      </div>
    </article>
  ))}
</div>
</div>
</div>     
    
    </>
  );
};

export default Gallary;

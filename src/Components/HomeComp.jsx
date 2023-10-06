/* eslint-disable no-unused-vars */
import { images } from "../assets/ImpoerImages";
import React, { useState, useEffect } from "react";

function HomeComp() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX || e.pageX;
      const y = e.clientY || e.pageY;
      setMousePosition({ x, y });

      // Calculate new div position based on mouse position
      const newDivX = (x - window.innerWidth / 2) / 20;
      const newDivY = (y - window.innerHeight / 2) / 20;
      setDivPosition({ x: newDivX, y: newDivY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className=" w-full flex justify-center items-center flex-col h-[80vh] "
      name="home"
      id="home"
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        className="home_sec"
        style={{
          position: "absolute",
          transform: `translate(${divPosition.x}px, ${divPosition.y}px)`,
          transition: "transform 0.1s ease",
        }}
      >
        <img className=" w-[200px]" src={images.BlacklLogo} alt="thirD logo" />
        <h1 className="heading-text animate__animated animate__zoomInDown ">
          Unlock the Future of Space Exploration with ThriD
        </h1>
        <p className=" content-text animate__animated animate__fadeInUp">
          Immersive 3D Scanning Technology for Every Industry
        </p>
      </div>
    </div>
  );
}

export default HomeComp;

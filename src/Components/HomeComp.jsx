/* eslint-disable no-unused-vars */
import { images } from "../assets/ImpoerImages";
import React, { useState, useEffect } from "react";
import "./HomeComp.css";

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
      className=" w-full flex justify-center items-center flex-col h-[80vh] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <img className=" w-[300px]" src={images.BlacklLogo} alt="thirD logo" />
        <h1 className="heading-text animate__animated animate__zoomInDown  bg-opacity-60 p-4 rounded-lg">
          Unlock the Future of Space Exploration with ThriD
        </h1>
        <p className="content-text animate__animated animate__fadeInUp  bg-opacity-60 p-4 rounded-lg">
          Immersive 3D Scanning Technology for Every Industry
        </p>
      </div>
    </div>
  );
}

export default HomeComp;

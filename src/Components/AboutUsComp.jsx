/* eslint-disable react/no-unescaped-entities */

import { images } from "../assets/ImpoerImages";

// Carousel
import Carousel from "../Components/Carosal/Carousel";
import "animate.css";

function AboutUsComp() {
  return (
    <div
      className="w-full  flex flex-col gap-6 justify-center items-center min-h-[700px]"
      name="about"
      id="about"
    >
      {/* About Us */}
      <div className="about_us_sec animate__animated animate__fadeInUp">
        <div className="about_us_img">
          <img src={images.AboutUs} alt="about us" />
        </div>
        <div className="about_us_content">
          <h1 className="heading-text mt-10 ">About Us</h1>
          <p className="content-text p-2">
            At ThriD, our mission is to revolutionize the way you perceive and
            engage with the physical world.
          </p>
          <p className="content-text p-2">
            Inspired by the transformative capabilities of cutting-edge spatial
            data technology, we're committed to reshaping spatial exploration.
          </p>
        </div>
      </div>
      <div className="doted_section"></div>
      <Carousel />
      <div className="doted_section"></div>

      {/* our vision */}
      <div className="our_vision_sec" id="vision">
        <div className="our_vision_content animate__animated animate__slideInLeft">
          <h1 className="heading-text mt-10 pb-5">Our Vision</h1>
          <h4 className="pb-5">We have a bold and transformative vision:</h4>
          <p className="content-text pb-5">
            To empower individuals and industries to harness the full potential
            of physical spaces. Through our advanced 3D scanning technology, we
            create immersive digital replicas of the real world.
          </p>
          <ul>
            <li>Enabling spatial innovation worldwide</li>
            <li>Revolutionizing property management</li>
            <li>Enhancing architectural design processes</li>
            <li>Empowering immersive education experiences</li>
          </ul>
        </div>
        <div className="our_vision_img animate__animated animate__slideInRight">
          <img src={images.OurVision} alt="our vision" />
        </div>
      </div>
    </div>
  );
}

export default AboutUsComp;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import whiteLogo from "./white-logo.svg";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarComp from "./SideBarComp";
import { useEffect } from "react";

function NavbarComp() {
  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        // console.log("Added scrolled"); // Debug
      } else {
        navbar.classList.remove("scrolled");
        // console.log("Removed scrolled"); // Debug
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky" id="navbar">
      <div className="navbar">
        <div className="container-fluid nav-container">
          <div className="logo">
            <img src={whiteLogo} height="85" width="85" href="#home" />
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>{" "}
            </li>
            <li>
              <a href="#services">Sector Applications</a>{" "}
            </li>
            <li>
              <a href="#offerings">Our Offerings</a>{" "}
            </li>
            <li>
              <a href="#vision">Our Vision</a>{" "}
            </li>
            <li>
              <a href="#work">Our Work</a>{" "}
            </li>
            <li>
              <a href="#benefits">Benefits</a>{" "}
            </li>
            <li>
              <a href="#how-works">How it Works</a>{" "}
            </li>
            <li>
              <a href="#get-in-touch">Request Demo</a>{" "}
            </li>
            <li>
              <a href="#contact">Contact Us</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComp;

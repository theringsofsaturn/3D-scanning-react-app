import NavbarComp from "./Components/NavbarComp";
import "./App.css";
import HomeComp from "./Components/HomeComp";
// import Carousel from "./Components/Carosal/Carousel";
import PopUp from "./Components/Pop-Up/PopUp";
import AboutUsComp from "./Components/AboutUsComp";
// import OurWorkComp from "./Components/OurWork/OurWorkComp.jsx";
import BenefitsComp from "./Components/Benefits/BenefitsComp";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Cta_section from "./Components/CTA/cta_section";
import Gallery from "./Components/Gallery_two/Gallery";
// import AboutUsComp from "./Components/AboutUsTwo";
import Work from "./Components/WayOfWork/work";
import Services from "./Components/Services";
import FeaturesComp from "./Components/Features/FeaturesComp";

function App() {
  return (
    <>
      <NavbarComp />
      <div className=" mt-0">
        <HomeComp />
        <AboutUsComp />
        <PopUp />
        <BenefitsComp />
        <Services />
        <Gallery />
        <FeaturesComp />
        <Work />
        <Cta_section />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;

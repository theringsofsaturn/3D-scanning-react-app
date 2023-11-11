import React from "react";
import InfoPointLogo from "../../assets/features/InfoPoint.svg";
import SchematicFloorLogo from "../../assets/features/SchematicFloorPlans.svg";
import MeasurmentsLogo from "../../assets/features/Measurements.svg";
import NotesLogo from "../../assets/features/Notes.svg";
import HighDefinitionLogo from "../../assets/features/HighDefinitionPhotos.svg";
import PointCloudLogo from "../../assets/features/PointClouds.svg";
import GuidedToursLogo from "../../assets/features/GuidedTours.svg";
import WhiteLabeling from "../../assets/features/WhiteLabeling.svg";
import "./FeaturesComp.css";

const featuresData = [
  {
    title: "Info Point",
    description:
      "Embed annotations and media in your digital twin to highlight key features of your project",
    logo: InfoPointLogo,
  },
  {
    title: "Schematic Floor Plans",
    description:
      "Generate schematic floor plans of your project with the push of a button.",
    logo: SchematicFloorLogo,
  },
  {
    title: "Measurements",
    description:
      "Measure any aspect of your space, such as space, walls, windows, furniture and more. ",
    logo: MeasurmentsLogo,
  },
  {
    title: "Note",
    description:
      "Collaborate in real time by starting conversations in the content of a space.",
    logo: NotesLogo,
  },
  {
    title: "High Definition Photos",
    description: "4K print quality photography of hyper realistic renderings.",
    logo: HighDefinitionLogo,
  },
  {
    title: "Point Clouds",
    description:
      "A bundle of digital assets you can download in file formats like .XYZ. .OBJ, E57.",
    logo: PointCloudLogo,
  },
  {
    title: "Guided Tours",
    description:
      "Automatically generate video tours that highlight attributes of your space.",
    logo: GuidedToursLogo,
  },
  {
    title: "White Labeling",
    description:
      "Use your logo and your information to personalize the 3D tour we provide.",
    logo: WhiteLabeling,
  },
];

function FeaturesComp() {
  return (
    <div className="features-section" id="features">
      <h2 className="features-headline">Features</h2>
      <div className="features-container" id="features">
        {featuresData.map((feature, index) => (
          <div className="feature" key={index}>
            <img
              src={feature.logo}
              alt={`${feature.title} logo`}
              className="feature-logo"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesComp;

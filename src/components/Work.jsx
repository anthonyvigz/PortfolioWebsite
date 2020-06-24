import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/work.css";
import { Spring } from "react-spring/renderprops";
import ProjectBlock from "./ProjectBlock";
import hoggerImage from "../img/hoggerimage.png";
import propmanImage from "../img/propmanimage.png";
import eventrImage from "../img/eventrimage.png";
import tbImage from "../img/tbimage.png";

function Work() {
  const projects = [
    {
      name: "TouchBase",
      link: "https://touch-base.us",
      image: tbImage,
      color: "rgba(43, 6, 207, 0.39)",
      description: "Job Search Organizer App",
    },
    {
      name: "Hogger",
      link: "https://github.com/steveo-app",
      image: hoggerImage,
      color: "rgba(6, 100, 207, 0.39)",
      description: "Disc Golf Mobile App",
    },
    {
      name: "Freehold",
      link: "https://freehold.dev",
      image: propmanImage,
      color: "rgba(14, 123, 49, 0.39)",
      description: "Property Manager",
    },
    {
      name: "Eventr",
      link: "https://github.com/Eventr-online",
      image: eventrImage,
      color: "rgba(228, 101, 48, 0.39)",
      description: "Event Hosting Application",
    },
  ];

  return (
    <AbsoluteWrapper>
      <h5 className="projectsHeader">Projects</h5>
      <div className="emptyBorder"></div>
      <div className="workPage">
        {projects.map((project, index) => {
          return (
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay="200"
              key={index}
            >
              {(props) => (
                <div style={props}>
                  <ProjectBlock
                    key={index}
                    color={project.color}
                    description={project.description}
                    image={project.image}
                    name={project.name}
                    link={project.link}
                  />
                </div>
              )}
            </Spring>
          );
        })}
      </div>
      <h5 className="projectsHeader">Demo Video</h5>
      <div className="emptyBorder"></div>
      <iframe
        src="https://player.vimeo.com/video/406958066"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </AbsoluteWrapper>
  );
}

export default Work;

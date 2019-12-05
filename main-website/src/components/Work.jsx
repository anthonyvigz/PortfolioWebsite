import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import '../css/resume.css';
import { Spring } from 'react-spring/renderprops';
import ProjectBlock from './ProjectBlock';
import hoggerImage from '../img/hoggerimage.png'
import propmanImage from '../img/propmanimage.png';
import eventrImage from '../img/eventrimage.png';

function Work() {


    const projects = [
        { 
            name: "Hogger",
            link: "www.asdasd.com",
            image: hoggerImage,
            color: "rgba(6, 100, 207, 0.39)",
            description: "Disc Golf Mobile App"
        },
        { 
            name: "PropMan",
            link: "www.asdasd.com",
            image: propmanImage,
            color: "rgba(14, 123, 49, 0.39)",
            description: "Property Manager"
        },
        {
            name: "Eventr",
            link: "www.asdasd.com",
            image: eventrImage,
            color: "rgba(228, 101, 48, 0.39)",
            description: "Event Hosting Application"
        }
    ];

  return (
    <AbsoluteWrapper>
        <h5 className="projectsHeader">Projects</h5>
        <h5 className="emptyBorder"></h5>
        <div className="workPage">
            {projects.map( project => {
                console.log(project)
                return (
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='200'>
                        {props => <div style={props}>
                            <ProjectBlock color={project.color} description={project.description} image={project.image} name={project.name} link={project.link} />
                                </div>}
                    </Spring>
                )
            })}
        </div>
    </AbsoluteWrapper>
  );
}

export default Work;

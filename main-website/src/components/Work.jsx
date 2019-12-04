import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
import ProjectBlock from './ProjectBlock';
import hoggerImage from '../img/hoggerimage.png'

function Work() {


    const projects = [
        { 
          name: "Hogger",
          link: "www.asdasd.com",
          image: hoggerImage
        },
        { 
          name: "Project",
          link: "wasd.com",
          image: hoggerImage
        }
    ];

  return (
    <AbsoluteWrapper>
        <div className="workPage">
            {projects.map( project => {
                console.log(project)
                return (
                    <ProjectBlock image={project.image} name={project.name} link={project.link} />
                )
            })}
        </div>
    </AbsoluteWrapper>
  );
}

export default Work;

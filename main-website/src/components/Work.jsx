import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
import ProjectBlock from './ProjectBlock';

function Work() {


    const projects = [
        { 
          name: "Hogger",
          link: "www.asdasd.com"
        },
        { 
          name: "Project",
          link: "wasd.com"
        }
    ];

  return (
    <AbsoluteWrapper>
        <div className="workPage">
            {projects.map( project => {
                console.log(project)
                return (
                    <ProjectBlock name={project.name} link={project.link} />
                )
            })}
        </div>
    </AbsoluteWrapper>
  );
}

export default Work;

import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';

function ProjectBlock(props) {

    const [display, setDisplay] = useState({display: "none"})

    const makeVisible = event => {
        event.preventDefault();

        console.log(display);

        setDisplay({display: "flex", backgroundColor: "red"})
    }

  return (
    <div onMouseEnter={makeVisible} className="mainBlock">
        <img className="projectImg" src="https://www.howtofascinate.com/wp-content/uploads/Mystique-background-personality-test.jpg" alt="test" width="300px" />
        <div className="hoverBlock" style={display}>
            <h1 className="projectTitle">{props.name}</h1>
            <h2 className="projectDesc">{props.link}</h2>
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </div>
    </div>
  );
}

export default ProjectBlock;

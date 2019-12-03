import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';

function ProjectBlock(props) {

  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.link}</h2>
    </div>
  );
}

export default ProjectBlock;

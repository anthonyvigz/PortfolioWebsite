import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/resume.css';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Resume() {


  return (
      <AbsoluteWrapper>
            <AwesomeButton size="large" type="primary">Download Resume</AwesomeButton>
      </AbsoluteWrapper>
  );
}

export default Resume;

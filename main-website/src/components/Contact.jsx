import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/contact.css';
import { Spring } from 'react-spring/renderprops';

function Contact(props) {


  return (
      <AbsoluteWrapper>
        <div className="contactBlock">
          <h5 className="projectsHeader">Contact</h5>
          <h5 className="emptyBorder"></h5>
        </div>
      </AbsoluteWrapper>
  );
}

export default Contact;

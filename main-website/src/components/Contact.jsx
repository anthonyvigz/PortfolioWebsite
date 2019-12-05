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
          <h7>Have a question or want to work together?</h7>
          <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="email"></input>
            <textarea type="text" placeholder="Your message" rows="4" cols="50"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </AbsoluteWrapper>
  );
}

export default Contact;

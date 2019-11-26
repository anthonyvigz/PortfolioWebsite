import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/about.css';
import dummyPortrait from '../img/irakli-nadar-artstation-da.jpg';

function About() {

  return (
    <AbsoluteWrapper>
        <div className="aboutBlock">
            <div className="dummyBlock">
                <img src={dummyPortrait} width="400" />
            </div>
            <div className="aboutInfo">
                <h2>About Anthony</h2>
                <h1>A professional web developer with a continuous yearn to learn.</h1>
                <p>
                    Initially being from the media communications field, 
                    Anthony sought to further increase his knowledge in web 
                    development and computer programming. Anthony is a full 
                    stack web developer who has gained deep knowledge of 
                    front-end and back-end development frameworks and libraries
                    through intensive training courses. He finds that his 
                    advanced skills in graphic design and video production give 
                    him a creative cutting edge in providing solutions within 
                    any environment he works in. After working with the ability 
                    to provide clear and productive work behind any platform.
                </p>
            </div>
        </div>
    </AbsoluteWrapper>
  );
}

export default About;

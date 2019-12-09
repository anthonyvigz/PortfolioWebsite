import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/about.css';
import dummyPortrait from '../img/portrait56.png';
import { Spring } from 'react-spring/renderprops';

function About() {

  return (
    <AbsoluteWrapper>
        <div className="aboutBlock">
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    delay='200'>
                    {props => <div style={props}>
                        <div className="dummyBlock">
                            <img className="portrait"src={dummyPortrait} />
                        </div>
                        </div>}
                </Spring>
                <div className="aboutInfo">
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='400'>
                        {props => <div style={props}>
                            <h2>About Anthony</h2>
                        </div>}
                    </Spring>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='500'>
                        {props => <div style={props}>
                            <h1>A professional web developer with a continuous yearn to learn.</h1>
                        </div>}
                    </Spring>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='700'>
                        {props => <div style={props}>
                            <p>
                                Initially being from the media communications field, Anthony is a full stack web developer who has gained deep knowledge of 
                                front-end and back-end frameworks and libraries through intensive training courses. He finds that his 
                                extensive experience in graphic design and video production give him a creative cutting edge in providing solutions within 
                                any technical environment he works in. 
                                Anthony is excited to work with motivated and open-minded people that want to tackle big challenges and 
                                make even bigger impacts in software and web development.
                            </p>
                        </div>}
                    </Spring>
                </div>
        </div>
        <div className="bottomBorder"></div>
    </AbsoluteWrapper>
  );
}

export default About;

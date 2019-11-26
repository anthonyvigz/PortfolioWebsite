import React from 'react';
import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from './AbsoluteWrapper';

function Home() {

      
    const props = useSpring({opacity: 1, from: {opacity: 0}, })

  return (
    <AbsoluteWrapper>
        <div className="homeBlock">
            <h3>Hello!</h3>
            <animated.div style={props}>
                I am Anthony!
            </animated.div>
            <p>
                I'm a Full Stack Web Developer highly skilled in an array of 
                front-end and back-end languages and frameworks. 
                I have a passion for crisp design and flawless functionality.
            </p>
        </div>
    </AbsoluteWrapper>
  );
}

export default Home;

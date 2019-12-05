import React from 'react';
import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from './AbsoluteWrapper';
import resume from "../img/AnthonyVigliottaResumeMaster2.pdf";
import '../css/resume.css';

function Home() {

    document.body.classList.remove("newpage");

    const props = useSpring({opacity: 1, from: {opacity: 0}, })

  return (
    <AbsoluteWrapper>
        <div className="homeBlock">
            <button className="hello">Hello!</button>
            <h2>I am Anthony.</h2>
            <p>
                I am a Full Stack Web Developer highly skilled in an array of 
                front-end and back-end languages and frameworks. 
                I have a passion for crisp design and flawless functionality.
            </p>
            <div class="middle">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <form method="get" action={resume} target="_blank">
              <button type="submit" className="downloadResume">Download Resume</button>
            </form>
        </div>
    </AbsoluteWrapper>
  );
}

export default Home;

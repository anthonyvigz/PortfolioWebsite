import React from 'react';
import { useSpring, animated } from 'react-spring';
import AbsoluteWrapper from './AbsoluteWrapper';
import resume from "../img/AnthonyVigliottaResume.pdf";
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
              <a target="_blank" href="https://github.com/anthonyvigz">
                <i className="fab fa-github"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/anthonyvigliotta/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a target="_blank" href="https://twitter.com/anthonyvigz">
                <i className="fab fa-twitter"></i>
              </a>
              <a target="_blank" href={resume}>
                <i className="fas fa-file"></i>
              </a>
            </div>
        </div>
    </AbsoluteWrapper>
  );
}


export default Home;

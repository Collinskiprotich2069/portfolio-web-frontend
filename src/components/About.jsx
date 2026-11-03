import Slideshow from "./Slideshow.jsx";
import "../styles/About.css";
import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="about-container" ref={ref}>
        <div className="profile">
          <Slideshow />
          <p>Hi I'm Collins Kiprotich</p>
        </div>
        <div className="about-description">
          <p>
            I am an aspiring fullstack developer specializing in building
            scalable web applications
          </p>
          <p>
            Currently, I am a second year student at
            <a href="https://www.mmu.ac.ke/" target="noblank">
              Multimedia University of Kenya
            </a>
            pursuing Bachelor of Science in Applied Physics and Computer
            Science.
          </p>
          <p>
            I am highly motivated, a fast learner, and passionate about
            exploring new technologies and solving complex software engineering
            challenges.
          </p>
        </div>
      </div>
    </>
  );
  About.displayName = "About";
});

export default About;

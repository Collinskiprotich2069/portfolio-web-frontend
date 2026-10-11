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
          <p>I am an aspiring fullstack developer building scalable websites</p>
          <p>
            A second year student at{" "}
            <a href="https://www.mmu.ac.ke/" target="noblank">Multimedia University</a> of Kenya
            pursuing Bachelor of Science in Applied Physics and Computer
            Science.
          </p>
          <p>
            Hardworking, fast learner, ready and eager to learn more especially
            when it comes to matters dealing with Iinformation Technology.
          </p>
        </div>
      </div>
    </>
  );
  About.displayName = "About";
});

export default About;

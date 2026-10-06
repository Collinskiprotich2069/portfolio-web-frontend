import Slideshow from "./Slideshow.jsx";
import "../styles/About.css";
import React from "react";
import ProfileImages from "../api/ProfileImagesApi.jsx";
//import ProfileImages from "../api/ProfileImagesApi.jsx";
//import { ContactForm } from "../api/SendEmail.joccsx";

const About = React.forwardRef((props, ref) => {

  return (
    <>
      <div className="about-container" ref={ref}>
        <div className="profile">
          <Slideshow />
          <p>Hi I'm Collins Kiprotich</p>
        </div>
        <ProfileImages />
        <div className="about-description">
          <p>I am an aspiring fullstack developer building scalable websites</p>
          <p>
            Currently, I am pursuing Bachelor of Science in Applied Physics and
            Computer Science at Multimedia University of Kenya.
          </p>
        </div>
      </div>
    </>
  );
  About.displayName = "About";
});

export default About;

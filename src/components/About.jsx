import Slideshow from "./Slideshow.jsx";
import "../styles/About.css";
import React from "react";
import ProfileImages from "../api/ProfileImagesApi.jsx";
//import { ContactForm } from "../api/SendEmail.jsx";

const About = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="about-container" ref={ref}>
        <div className="profile">
          <Slideshow />
          <p>Hi I'm Collins Kiprotich</p>
        </div>
        <div>
          <ProfileImages/>
</div>
        <div className="about-description">
          <p>
            I am an aspiring fullstack developer building scalable websites
            <p>
              Currently, I am pursuing Bachelor of Science in Applied Physics
              and Computer Science at Multimedia University of Kenya.
            </p>
          </p>
        </div>
      </div>
    </>
  );
  About.displayName = "About";
});

export default About;

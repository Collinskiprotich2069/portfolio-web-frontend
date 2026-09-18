import Footer from "../components/Footer";
import Projects from "../components/Projects";
import "../App.css";
import About from "../components/About";
//import Contact from "../components/Contact";
import "../styles/Header.css";
import { useRef, useState } from "react";
import SocialMediaLinks from "../components/SocialLinks";

function Main() {
  //function to enable the scroll behaviour when a header element is clicke
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("Useref is still null");
    }
  };
  const scrollToContact = () => {
    if (aboutRef.current) {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="header-container">
        <li className="header-elements">
          <ul>
            <a onClick={() => scrollToContent}>About</a>
          </ul>
          <ul>
            <a href="#">Skills</a>
          </ul>
          <ul>
            <a onClick={scrollToContent}>Projects</a>
          </ul>
          <ul>
            <a onClick={scrollToContact}>Contact Me</a>
          </ul>
        </li>
      </div>

      <div id="aboutt" className="about">
        <About />
      </div>

      <div>
        <Projects ref={contentRef} />
      </div>
      <div className="social">
        <SocialMediaLinks ref={aboutRef} />
      </div>
      <Footer />
    </>
  );
}

export default Main;

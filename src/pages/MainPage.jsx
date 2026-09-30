import Footer from "../components/Footer";
import Projects from "../components/Projects";
import "../App.css";
import About from "../components/About";
import "../styles/Header.css";
import { useEffect, useRef, useState } from "react";
import SocialMediaLinks from "../components/SocialLinks";
import { Skill } from "../components/skills";

function Main() {
  //function to enable the scroll behaviour when a header element is clicke
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      console.error("Useref is still null");
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",

        block: "start",
      });
    }
  };

  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    })
  });
  return (
    <>
      <div id="header" className="header-container">
        <li className="header-elements">
          <ul>
            <a onClick={scrollToAbout}>About</a>
          </ul>
          <ul>
            <a onClick={scrollToSkills}>Skills</a>
          </ul>
          <ul>
            <a onClick={scrollToProjects}>Projects</a>
          </ul>
          <ul>
            <a onClick={scrollToContact}>Contact Me</a>
          </ul>
        </li>
      </div>
      <div className="web-elements">
        <div className="about">
          <About ref={aboutRef} />
        </div>
        <div className="skills">
          <Skill ref={skillsRef} />
        </div>
        <div className="projects">
          <Projects ref={projectsRef} />
        </div>
        <div className="social">
          <SocialMediaLinks ref={contactRef} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;

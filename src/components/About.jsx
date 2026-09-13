import Slideshow from "./Slideshow.jsx";
import '../styles/About.css';
import { ContactForm } from "../api/SendEmail.jsx"; 

function About() {
        return (
          <>
            <div className="about-container">
              <ContactForm/>
                  <div className="profile">
                <Slideshow />
                <p>Hi I'm Collins Kiprotich</p>
              </div>

              <div className="about-description">
                <p>
                  I am an aspiring fullstack developer building scalable websites
                  <p>
                    Currently, I am pursuing Bachelor of Science in Applied
                    Physics and Computer Science at Multimedia University of
                    Kenya.
                  </p>
                </p>
              </div>
              <div className="technologies">
                <p>The following are the programming languages and frameworks that I use </p>
                <li className="imagas">
                  <ul>
                    <img src="../src/assets/react.svg" alt="react" />
                    <p>React</p>
                  </ul>
                  <ul>
                    <img src="../src/assets/vite.svg" alt="react" />
                    <p> Vite</p>
                  </ul>
                </li>
              </div>
            </div>
            
          </>
        );
     };

export default About;

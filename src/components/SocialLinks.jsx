import React from "react";
import "../styles/SocialLinks.css";

const SocialMediaLinks =  React.forwardRef((props, ref) => {
  return (
    <>
      <div className="social-links-container" ref={ref}>
        <li>
          <ul>
            <a
              href="https://www.linkedin.com/in/collins-kiprotich-18a682380"
              target="no_blank"
            >
              LinkedIn
            </a>
          </ul>
          <ul>
            <a
              href="https://api.whatsapp.com/qr/AYVSIPUBOWEVO1?autoload=1&app_absent=0"
              target="no_blank"
            >
              WhatsApp
            </a>
          </ul>
          <ul>
            <a href="https://github.com/Collinskiprotich2069" target="no_blank">
              Github
            </a>
          </ul>
          <ul>
            <a
              href="https://www.facebook.com/Kiprotich.Collins.01"
              target="no_blank"
            >
              Facebook
            </a>
          </ul>
        </li>
      </div>
    </>
  );
  SocialMediaLinks.displayName = "SocialMediaLinks";
});

export default SocialMediaLinks;

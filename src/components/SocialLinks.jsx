import React from "react";
import "../styles/SocialLinks.css";

const SocialMediaLinks =  React.forwardRef((props, ref) => {
  return (
    <>
      <div className="social-links-container" ref={ref}>
        <li>
          <ul>
            <a href="https://www.linkedin.com" target="no_blank">
              LinkedIn
            </a>
          </ul>
          <ul>
            <a href="https://www.whatsapp.com" target="no_blank">
              WhatsApp
            </a>
          </ul>
          <ul>
            <a href="https://www.github.com" target="no_blank">
              Github
            </a>
          </ul>
          <ul>
            <a href="https://www.facebook.com" target="no_blank">
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

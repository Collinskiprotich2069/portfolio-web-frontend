import React from "react";
import "../styles/SocialLinks.css";

const SocialMediaLinks =  React.forwardRef((props, ref) => {
  return (
    <>
      <div className="social-links-container" ref={ref}>
        <li>
          <ul>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </ul>
          <ul>
            <a href="https://www.whatsapp.com">WhatsApp</a>
          </ul>
          <ul>
            <a href="https://www.github.com">Github</a>
          </ul>
          <ul>
            <a href="https://www.facebook.com">Facebook</a>
          </ul>
        </li>
      </div>
    </>
  );
  SocialMediaLinks.displayName = "SocialMediaLinks";
});

export default SocialMediaLinks;

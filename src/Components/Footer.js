import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p className="designedby-text">
        <TypewriterComponent
          options={{
            strings: [" Designed & Built by Sabir Shaikh"],
            autoStart: true,
            loop: true,
            delay: 110,
            deleteSpeed: 1,
          }}
        />
      </p>
      <div className="footer-icon-container">
        <span className="footer-icons">
         <a href="https://github.com/Sabirshaikh44"><i className="fa-brands fa-github"></i></a> 
        </span>
        <span className="footer-icons">
        <a href="https://www.instagram.com/mr.sabir_sykh/"> <i className="fa-brands fa-instagram"></i></a>
        </span>
        <span className="footer-icons">
         <a href="https://www.linkedin.com/in/sabir-shaikh-4a804a215/"> <i className="fa-brands fa-linkedin-in"></i></a>
        </span>
      </div>
    </div>
  );
}

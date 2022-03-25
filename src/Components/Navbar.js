import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);
  function Navhandler() {
    return setmenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className="Navbar">
        <div className="logo-sec">
          <div className="logo-text">
            <h3><span className="greenish-logo-text">S</span>abir <span className="greenish-logo-text">S</span></h3>
          </div>

          <i
            className={menuOpen ? "fa-solid fa-xmark hamburger-btn" : "fa-solid fa-bars hamburger-btn" }
            id="Hamburger-btn"
            onClick={Navhandler}
          ></i>
        </div>

        <div className={menuOpen ? "nav-links mobile-nav-links" : "nav-links"}>
          <nav>
            <ul>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Work">Work</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
             <a className="resume-btn" href="./Img/Sabir_Shaikh__resume.pdf" download>
               <li>Resume</li></a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <div className="img">
        <div className="header">
          <div className="logo"></div>
          <Link className="contact" to="contact" smooth={true} duration={1500}>
            Contact Me
          </Link>
        </div>
        <div className="main-show">
          <h1>
            Hello, my name is Pascu Mihai and I'm a <hr /> Front End Developer.
          </h1>
          <div className="links">
            <a href="https://www.instagram.com/mihaipascu_/?hl=ro" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/mihai.pascu.14" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/pascu-ioan-mihai-914aa9192/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="learn-more" id="learn-more">
          <Link className="more" to="learn-more" smooth={true} duration={1000}>
            Learn more about me <br />
            <i className="fa fa-angle-down"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

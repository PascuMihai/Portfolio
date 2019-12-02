import React from "react";

function Header() {
  return (
    <div>
      <div className="img">
        <div className="header">
          <div className="logo"></div>
          <button className="contact">Contact Me</button>
        </div>
        <div className="main-show">
          <h1>
            Hello, my name is Pascu Mihai and I'm a <hr /> Front End Developer.
          </h1>
          <div className="links">
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="learn-more">
          <h4>
            Learn more about me <br />
            <i className="fa fa-angle-down"></i>
          </h4>
        </div>
      </div>
      <div className="about-me">
        <div className="info">
          <h1>I'm Mihai, Front-End developer specialized in build User Interfaces.</h1>
          <p>
            Hello, my name is Pascu Mihai and I'm a Personal trainer and a
            photographer based in Cluj Napoca, future Full Stack Web Developer
            specialized in the MERN stack. Currently spending the bulk of my
            time learning the Front-End technologies: HTML5, CSS3, Java Script
            and React, slowly transition into Next.js framework for React, but
            I'm always excited to learn new technologies. I'm ambitious,
            passionate and motivated person, I can say I'm an autodidact person
            who likes to focus on his personal growth and always improving his
            skills. I'm looking for a team that allows me to perpetually get
            outside my comfort zone, and focus on improving my craft..
          </p>
        </div>
        <div className="projects">
          <h1>What I do:</h1>
          <h3>Front-End</h3>
          <p>
            Specialized on building good looking UI and vrey good user experiences.
          </p>

          <h3>Personal Training</h3>
          <p>
            I'm also a certified personal trainer, located in Cluj Napoca.
            My goal is helping and motivating people to achieve their goals.
          </p>

          <h3>Photography</h3>
          <p>
            One of my side hustle is portrait photography and street photograpy.
          </p>
        </div>
        <div className="dev-tools">
          <h1>Dev Tools:</h1>
          <p>HTML</p>
          <p>CSS</p>
          <p>Java Script</p>
          <p>React</p>
          <p>Shell/Terminal</p>
          <p>Git</p>
          <p>Lightroom</p>
        </div>
      </div>
      <div className="recent-work">
        <div className="react">
            react project
        </div>
        <div className="java-script">
            java script project
        </div>
      </div>
    </div>
  );
}

export default Header;

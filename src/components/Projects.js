import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects">
      <div className="recent-work">
        <Link className="game" to="/Game" />
        <Link className="react" to="/ReactMenu" />
      </div>
    </div>
  );
}

export default Projects;

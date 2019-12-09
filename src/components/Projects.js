import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id='projects'>
      <div className="recent-work">
        <Link className="react" to='ReactProjects' />
        <Link className="java-script" to="/ReactMenu" />
      </div>
    </div>
  );
}

export default Projects;

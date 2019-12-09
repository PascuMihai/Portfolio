import React from "react";
import { Link } from "react-router-dom";
import App from "./ReactEvents/App";

function JavaScript() {
  return (
    <div className="js">
      <div class='app-exercise'>
        <App />
      </div>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default JavaScript;

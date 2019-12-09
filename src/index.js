import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JavaScript from "./components/JavaScript/JavaScript";
import ReactProjects from "./components/ReactProjects/ReactProjects";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/JavaScript' component={JavaScript} />
      <Route path='/ReactProjects' component={ReactProjects} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

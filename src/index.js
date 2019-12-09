import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactMenu from "./components/ReactProjects2/ReactMenu";
import ReactProjects from "./components/ReactProjects/ReactProjects";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/ReactMenu' component={ReactMenu} />
      <Route path='/ReactProjects' component={ReactProjects} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

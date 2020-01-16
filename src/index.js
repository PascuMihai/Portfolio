import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactMenu from "./components/ReactProjects2/ReactMenu";
import Game from "./components/NumberGuessingGame/Game";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/ReactMenu' component={ReactMenu} />
      <Route path='/Game' component={Game} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

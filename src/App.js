import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Deck from "./pages/Deck";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/:id">
            <Deck />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

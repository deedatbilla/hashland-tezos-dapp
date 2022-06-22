import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./features/Home";
import LandDetails from "./features/LandDetails";
function Routes() {
  return (
    <Router>
      <Switch>
       
        <Route path="/land" component={LandDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;

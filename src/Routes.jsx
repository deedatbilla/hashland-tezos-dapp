import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./features/Home";
import LandDetails from "./features/LandDetails";
import SellLand from './features/SellLand'
function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/register" component={SellLand} />
        <Route path="/land" component={LandDetails} />
       
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;

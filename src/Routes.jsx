import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./features/Home";
import LandDetails from "./features/LandDetails";
import SellLand from "./features/SellLand";
import MyLands from "./features/MyLands";
import Header from "./components/Header";
function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/register" component={SellLand} />
        <Route path="/land/:id" component={LandDetails} />
        <Route path="/my-lands" component={MyLands} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;

import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Products from "../views/Products";
import history from "../constants/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Products} exact />
      </Switch>
    </Router>
  );
};

export default Routes;

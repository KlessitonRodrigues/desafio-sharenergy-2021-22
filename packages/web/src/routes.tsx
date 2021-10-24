import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import Login from "./pages/login/index";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" />
      <Redirect path="/" to="/login" />
    </Switch>
  </HashRouter>
);

export default Routes;

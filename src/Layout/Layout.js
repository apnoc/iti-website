import React from "react";
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Home from "../modules/Menu1/index";
import "./layout.css";
import routeConfig from "./routeConfig";

function Layout() {
  return (
    <div>
      <Breadcrumbs />
      <Switch>
        <Route exact path="/nicapsc-iti/">
          <Home />
        </Route>
        {routeConfig.map((route, i) => (
          <Route key={route} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default Layout;

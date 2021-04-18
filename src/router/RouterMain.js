import React from "react";
import Login  from  "../pages/Login";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";

const RouterMain = (props) => {
  return (
    <BrowserRouter>
      <Route exact={true} path={"/"} component={""} />
      <Route exact={true} path={routes.login} component={Login} />
    </BrowserRouter>
  );
};

export default RouterMain;

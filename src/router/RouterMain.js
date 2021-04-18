import React from "react";
import Login  from  "../pages/Login";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../pages/Login';
import Navbar from '../components/appBar/NavBar';
import registerPublication from '../pages/publicaciones/RegistrarPublicacion'

const RouterMain = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact={true} path={"/"} component={""} />
      <Route exact={true} path={routes.login} component={Login} />
      <Route exact={true} path={routes.registerPublication} component={registerPublication} />
    </BrowserRouter>
  );
};

export default RouterMain;

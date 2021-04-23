import React from "react";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../pages/Login';
import Navbar from '../components/appBar/NavBar';
import registerPublication from '../pages/publicaciones/RegistrarPublicacion';
import registerVeterinary from '../pages/registro/RegistrarVeterinario'
const RouterMain = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact={true} path={"/"} component={""} />
      <Route exact={true} path={routes.login} component={Login} />
      <Route exact={true} path={routes.registerPublication} component={registerPublication} />
      <Route exact={true} path={routes.registerVeterinary} component={registerVeterinary} />
    </BrowserRouter>
  );
};

export default RouterMain;

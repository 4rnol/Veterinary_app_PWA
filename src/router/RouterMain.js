import React from "react";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../pages/Login';
import Navbar from '../components/appBar/NavBar';
import registerPublication from '../pages/publicaciones/RegistrarPublicacion';
import registerVeterinary from '../pages/registro/RegistrarVeterinario';
import infoVeterinary from '../pages/InformacionVeterinario/infoVeterinario';
import {PrivateRoute} from '../constants/PrivateRoute';
import Publicaciones from '../pages/verPublicaciones/Publicaciones';

const RouterMain = (props) => {
  const isAuth=false;
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact={true} path="/" component={Publicaciones} />

      <Route exact={true} path={routes.home} component={""} />
      <Route exact={true} path={routes.login} component={Login} />
      <Route exact={true} path={routes.registerVeterinary} component={registerVeterinary} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.registerPublication} component={registerPublication} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.infoVeterinary} component={infoVeterinary} />
    </BrowserRouter>
  );
};

export default RouterMain;

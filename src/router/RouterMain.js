import React from "react";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../pages/login';
import Navbar from '../components/appBar/NavBar';
import registerPublication from '../pages/publicaciones/RegistrarPublicacion';
import registerVeterinary from '../pages/registro/RegistrarVeterinario';
import infoVeterinary from '../pages/InformacionVeterinario/infoVeterinario';
import {PrivateRoute} from '../constants/PrivateRoute';
import Publicaciones from '../pages/verPublicaciones/Publicaciones';
import { connect } from "react-redux";

const RouterMain = (props) => {
  const { user } = props.userReducer;
  let isAuth = user !== null;
  
  return (
    <BrowserRouter>
      

      {isAuth  && <Navbar />}
      <Route exact={true} path={'/'} component={Login} />
      <Route exact={true} path={routes.login} component={Login} />
      <Route exact={true} path={routes.registerVeterinary} component={registerVeterinary} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.publications} component={Publicaciones} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.registerPublication} component={registerPublication} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.infoVeterinary} component={infoVeterinary} />
    </BrowserRouter>
  );
};

const mapStateToProps=(state)=>{
  return{
    userReducer:state.userReducer
  }
}

export default connect(mapStateToProps)(RouterMain);

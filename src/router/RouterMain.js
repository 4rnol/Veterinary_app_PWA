import React from "react";
import { routes } from "./RoutesConstants";
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../pages/login';
import Navbar from '../components/appBar/NavBar';
import { changeUser } from '../redux/actions/index.actions';
import registerPublication from '../pages/publicaciones/RegistrarPublicacion';
import registerVeterinary from '../pages/registro/RegistrarVeterinario';
import infoVeterinary from '../pages/InformacionVeterinario/infoVeterinario';
import {PrivateRoute} from '../constants/PrivateRoute';
import Publicaciones from '../pages/verPublicaciones/Publicaciones';
import publication from '../pages/verPubli/verpubli';
import { connect } from "react-redux";
import checkPub from '../pages/adminTable/CheckPendingPublications';
import login from '../api/BackendConnection/Login';

const RouterMain = (props) => {
  const { user } = props.userReducer;
  const e = sessionStorage.getItem('email');
  const p = sessionStorage.getItem('password');

  if (e !== null && p !== null && user === null) {
    login.login(e,p).then((data) => {
      props.changeUser(data);
      // history.push('/registerPublication')
    });
  }
  const isAuth = (e !== null && p !== null) || user != null;

  
  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} />
      <Route exact={true} path={routes.login} component={Login} />
      <Route exact={true} path={'/'} component={Login} />
      <Route exact={true} path={routes.registerVeterinary} component={registerVeterinary} />
      <Route exact={true} path={routes.publications} component={Publicaciones} />
      <Route exact={true} path={routes.publication} component={publication} />
      <Route exact={true} path={routes.veterinaryInfo} component={infoVeterinary} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.registerPublication} component={registerPublication} />
      <PrivateRoute isAuth={isAuth} exact={true} path={routes.checkPub} component={checkPub} />
    </BrowserRouter>
  );
};

const mapStateToProps=(state)=>{
  return{
    userReducer:state.userReducer
  }
}
const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user)),
});
export default connect(mapStateToProps,mapDispatchToProps)(RouterMain);

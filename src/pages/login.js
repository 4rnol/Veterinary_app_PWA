import * as React from "react";
import "./Login.css";
import {routes} from '../router/RoutesConstants';
import login from '../api/BackendConnection/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeUser } from '../redux/actions/index.actions';
import {sEmailOrPasswordIncorrects,sSomethingWentWrong} from '../constants/strings';

const {useState,useEffect}=React;

const Login = (props) => {
  const [checked, setChecked] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const [show, setShow] = useState(false);

  const [ email,handleEmail ]= useState("");
  const [ pas,handlePassword ]= useState("");

  const e = sessionStorage.getItem('email');
  const p = sessionStorage.getItem('password');

  if (e !== null && p !== null) {
    login.login(e,p).then((data) => {
      props.changeUser(data.account);
      props.history.push(routes.forosList);
    });
  }

    const signIn = (e) => {
    e.preventDefault();
    login.login(email,pas)
      .then((data) => {
        if (data) {
          props.changeUser(data.veterinary);
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', pas);
          props.history.push(routes.home);
        } else {
          setLoginErrorMsg(sEmailOrPasswordIncorrects);
          setShow(true);
        }
      })
      .catch((err) => {
        setLoginErrorMsg(sSomethingWentWrong);
        setShow(true);
        console.warn(err);
      });
  };

  return (
    <div className="login-section">
     <div className="login-box">
       
        <h1>Login</h1>        
        <form onSubmit={(event)=>signIn(event)}>
          <br />
          <label htmlFor="email">Ingrese su correo:</label>
          <input type="email" id="email" required minLength="15" maxLength="50" placeholder="Ingrese Usuario" onChange={({target})=>handleEmail(target.value)}/>
         <br />
          <label htmlFor="password">Ingrese su Contraseña</label>
          <input type="password" required minLength="5" maxLength="25" id="password" placeholder="Ingrese Contraseña" onChange={({target})=>handlePassword(target.value)}/>
          <button type="submit">Ingresar</button> 
        </form>
          <a href={routes.registerVeterinary}>No tienes cuenta Registrate</a>
      </div>
    </div>
   );
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => dispatch(changeUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

import * as React from "react";
import "./Login.css";
import {routes} from '../router/RoutesConstants';
import login from '../api/BackendConnection/Login';

const {useState,useEffect}=React;

const Login = (props) => {

  const [ email,handleEmail ]= useState("");
  const [ pas,handlePassword ]= useState("");

  const signIn=(e)=>{
    e.preventDefault();
    login.login(email,pas).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
      const email = document.getElementById("email");
      email.setCustomValidity("Cuenta no encontrada");
    })
  }

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

export default Login;

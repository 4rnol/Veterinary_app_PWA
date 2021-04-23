import React from "react";
import "./Login.css";

const Login = (props) => {
  return (
    <div className="login-section">
     <div className="login-box">
        <h1>Login</h1>        
          <br />
          <label htmlFor="username">Usuario</label>
          <input type="text" placeholder="Ingrese Usuario" />
         <br />
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder="Ingrese Contraseña"/>
          <input type="submit" value="Ingresar"/>  
          <a href="">No tienes cuenta Registrate</a>
      </div>
    </div>
   );
};

export default Login;

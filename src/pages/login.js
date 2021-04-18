import React from "react";
import "../pages/Login.css"
const Login = (props) => {
  return (
    <div class="login-section">
    <div class="login-box">
        <h1>Login</h1>
          <br />
          <label for="username">Usuario</label>
          <input type="text" placeholder="Ingrese Usuario" />
         <br />
          <label for="password">Contraseña</label>
          <input type="password" placeholder="Ingrese Contraseña"/>
          <input type="submit" value="Ingresar"/>  
          <a href="#">No tienes cuenta Registrate</a>
      </div>
   </div>
   );
};

export default Login;

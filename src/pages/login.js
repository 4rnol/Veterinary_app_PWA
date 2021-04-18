import React from "react";
<<<<<<< HEAD


const Login = (props) => {
  return (
    <div>
        asedasdsad
    </div>
  );
};

export default Login;
=======
import "../pages/Login.css"
const Login = (props) => {
  return (
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
   );
};

export default Login;
>>>>>>> 60450e3b53d6377f63558a68419320d1ac81f4c4

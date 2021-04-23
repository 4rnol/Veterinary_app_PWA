import * as React from 'react';
import "./RegistrarVeterinario.css";
const RegistrarVeterinario = (props) => {
  return (
    <div className="register-section">
    <div className="register-box">
      <div id="scroll"> 
        <h1>Registrar Veterinaria</h1>        
          <br />
          <label htmlFor="username">Nombre Veterinaria</label>
          <input type="text" placeholder="Ingrese Nombre" />
         <br />
          <label htmlFor="email">Correo Electronico</label>
          <input type="text" placeholder="Ingrese Correo"/>
          <br />
          <label htmlFor="phone">Telefono</label>
          <input type="text" placeholder="Ingrese Numero"/>
          <br />
          <label htmlFor="direction">Direccion</label>
          <input type="text" placeholder="Ingrese Direccion"/>
          <br />
          <label htmlFor="direction">Direccion</label>
          <input type="text" placeholder="Ingrese Direccion"/>
          <br />
          <label htmlFor="description">Descripcion</label>
          <input type="text" placeholder="Ingrese Descripcion"/>
          <br />
          <label htmlFor="specialty">Especialidad</label>
          <input type="text" placeholder="Ingrese Especialidad"/>
          <br />
          <label htmlFor="username">Facebook</label>
          <input type="text" placeholder="Ingrese Facebook"/>
          <br />
          <label htmlFor="username">WhatsApp</label>
          <input type="text" placeholder="Ingrese WhatsApp"/>
          <input type="submit" value="Registrar"/>
          </div>
      </div>
      </div>
  );
};

export default RegistrarVeterinario;
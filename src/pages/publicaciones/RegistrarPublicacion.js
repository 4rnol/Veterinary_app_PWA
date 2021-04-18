import * as React from 'react';
import './RegistrarPublicacion.css';

const RegistrarPublicacion = () => {
  return (
    <div className="container-register">
      <form>
        <div className="group-register">
          <input className="input-register" type="text-register" required />
          <span className="highlight-register"></span>
          <span className="bar-register"></span>
          <label className="label-registrar">Ingrese titulo de la publicacion</label>
        </div>

        {/* <div className="group-register"> */}
        <label className="label-registrar-textarea">Ingrese descripcion de la publicacion</label>
        <textarea  
          rows="20" 
          name="comment[text]" 
          id="comment_text" 
          cols="40" 
          className="ui-autocomplete-input"           
          aria-autocomplete="list" 
          aria-haspopup="true" 
        />
          {/* <span className="highlight-register"></span>
          <span className="bar-register"></span>
          <label>Ingrese descripcion de la publicacion</label>
        </div> */}
      </form>
    </div>
  );
};

export default RegistrarPublicacion;

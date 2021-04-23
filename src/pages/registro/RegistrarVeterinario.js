import * as React from 'react';
import "./RegistrarVeterinario.css";
import {useFiles} from '../../utils/validations/formValidations/useFiles';
import {projectStorage} from '../../api/Firebase/config';

const RegistrarVeterinario = (props) => {

  const[file,handleFileChange,fileError,
    setFileError,fileMessage,setFileMessage,previewSource]=useFiles();

  const registrar=()=>{
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on('state_changed', () => {
    }, (err) => {
      console.log('error' + err);
    }, async () => {
      await storageRef.getDownloadURL()
        .then((res) => {
          console.log(res);
        });
    });
  };
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
          <label htmlFor="username">Agregar Imagen</label>
          <input type="file" placeholder="Ingrese imagen" onChange={({target})=>handleFileChange(target.files[0])}/>

          <iframe
              desciption="iframe"
              data="application"
              src={previewSource}
          />

          <button type="submit" onClick={()=>registrar()}>
            Registrar
            </button>
          </div>
      </div>
      </div>
  );
};

export default RegistrarVeterinario;
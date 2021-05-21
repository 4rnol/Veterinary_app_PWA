import * as React from 'react';
import './RegistrarPublicacion.css';
import {useFiles} from '../../utils/validations/formValidations/useFiles';
import {projectStorage} from '../../api/Firebase/config';
import img from '../../assets/Dopi.jpg'

const RegistrarPublicacion = () => {
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
    <div className="registrar-section">
      <img className="img-detras" src={img} alt=""/>
     <div className="registrar-box">
     <div id="scroll"> 
        <h1>Registrar Publicacion</h1>        
          <br />
          <label htmlFor="username">Titulo</label>
          <input type="text" placeholder="Ingrese Titulo" />
         <br />
          <label htmlFor="Categoria">Categoria</label>
          <br />
          <select name="Categoria">
            <option>Cuidado Alimenticio</option> <option>Enfermedades</option><option>Vacunas</option>
          </select>
          <br />
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
         <br />
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

export default RegistrarPublicacion;

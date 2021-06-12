import * as React from 'react';

import './RegistrarPublicacion.css';
import {useFiles} from '../../utils/validations/formValidations/useFiles';
import img from '../../assets/Dopi.jpg'
import {postPublication} from '../../api/BackendConnection/servicePublications';
import API from '../../api/API';
import {useFullName as useTitle} from '../../utils/validations/formValidations/useNameForm';
import {useFullName as useDecription} from '../../utils/validations/formValidations/useNameForm';

import {projectStorage} from '../../api/Firebase/config';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { routes } from '../../router/RoutesConstants';

const {useState, useEffect} =React;

const RegistrarPublicacion = (props) => {
  const{user}=props.userReducer;

  const[file,
    handleFileChange,
    fileError,
    setFileError,
    fileMessage,
    setFileMessage,
    previewSource
  ]=useFiles();

  const [
    title, 
    handleTitleChange, 
    titleError, 
    setTitleError, 
    titleMesasge, 
    setTitleMessage
  ] = useTitle(3,25);

  const [description, 
    handleDescriptionChange, 
    descriptionError, 
    setDescriptionError, 
    descriptionMesasge, 
    setDescriptionMessage
  ] = useDecription(10,30);

  const [category,setCategory] = useState("");

  const registrar=(e)=>{
    e.preventDefault();
    if(previewSource===""){

    }else{
      const storageRef = projectStorage.ref(`Veterinary/${file.name}`);
    storageRef.put(file).on('state_changed', () => {
    }, (err) => {
      console.log('error' + err);
    }, async () => {
      await storageRef.getDownloadURL()
        .then((res) => {
          savePub(res);
        });
    });
    }
    
  };
  const savePub=async(imgLink)=>{
    try{
      await postPublication(title,category,description,imgLink,user._id);
      props.history.push(routes.publications);
    }catch(err){
      console.warn(err);
    }
  };
  return (
    <div className="registrar-section">
      <img className="img-detras" src={img} alt=""/>
     <div className="registrar-box">
     <div id="scroll"> 
     <form onSubmit={(e)=>registrar(e)}>
        <h1>Registrar Publicacion</h1>        
          <br />
          <label htmlFor="username">Titulo</label>
          <input type="text" placeholder="Ingrese Titulo" required onChange={({target})=>handleTitleChange(target.value)}/>
         <br />
          <label htmlFor="Categoria">Categoria</label>
          <br />
          <select name="Categoria" onChange={({target})=>setCategory(target.value)}>
            <option value="Cuidado alimenticio">Cuidado Alimenticio</option> 
            <option value="Enfermedades">Enfermedades</option>
            <option value="Vacunas">Vacunas</option>
          </select>
          <br />
          <label className="label-registrar-textarea" required>Ingrese descripción de la publicación</label>
        <textarea  
          rows="20" 
          name="comment[text]" 
          id="comment_text" 
          cols="40" 
          className="ui-autocomplete-input"           
          aria-autocomplete="list" 
          aria-haspopup="true" 
          onChange={({target})=>handleDescriptionChange(target.value)}
        />
         <br />
         <label htmlFor="username">Agregar Imagen</label>
          <input type="file" placeholder="Ingrese imagen" onChange={({target})=>handleFileChange(target.files[0])}/>

          { 
            previewSource!=="" && <img
              alt=""
              width="100%"
              height="220px"
              src={previewSource}
            />
          }

          <button type="submit">
            Registrar
            </button>
        </form>    
      </div>
      </div>
  </div>
  );
};

const mapStateToProps=(state)=>{
  return {
    userReducer:state.userReducer,
  }
}
export default connect(mapStateToProps)(withRouter(RegistrarPublicacion));

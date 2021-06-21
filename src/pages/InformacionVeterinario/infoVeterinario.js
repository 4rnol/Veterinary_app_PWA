import React from 'react';
import './infoVeterinario.css';
import img from '../../assets/Dopi.jpg';
import { useParams, withRouter } from 'react-router-dom';
import { getVeterinary } from '../../api/BackendConnection/CrudVeterinary';

const { useState, useEffect } = React;

const infoVeterinario = (props) => {
  const [veterinary,setVeterinary] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    (async function(){
      try{
        const response = await getVeterinary(id);
        setVeterinary(response);
      }catch(err){
        console.warn("err: "+err);
      }
    })();
  }, [])
  const meses=[
    "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
  ]
  const formatDate=(dateToFormat)=>{
    const date=new Date(dateToFormat);
    return `${date.getDate()} de ${meses[date.getMonth()]} de ${date.getFullYear()}`;
  };

  return (
    <div>
      {
        veterinary !== null && <div className="seccion-perfil-usuario">
          <img className="img-detras" src={img} alt="" />
          <div className="perfil-usuario-header">
            <div className="perfil-usuario-portada">
              <div className="perfil-usuario-avatar">
                <img src={veterinary.urlImg} alt="img-avatar"></img>
              </div>
            </div>
          </div>
          <div className="perfil-usuario-body">
            <div className="perfil-vet-bio">
            <div className="titulo-vet-div">
              <h3 className="titulo-vet">{veterinary.vet}</h3>
            </div>
              <ul className="lista-datos">
                <li> Se unio el:</li>
                <p className="texto">{formatDate(veterinary.createdAt)}</p>
              </ul>
            </div>
            <div className="perfil-usuario-footer">
              <ul className="lista-datos">
                <li> Direccion:</li>
                <p className="texto">{veterinary.direction}</p>
                <li>Veterinario/a:</li>
                <p className="texto">{veterinary.name} {veterinary.last_name}</p>
                <li> Telefono:</li>
                <a className="lin" href={'https://wa.me/'+ veterinary.phone} target="_blank"  >*{veterinary.phone}</a>  
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default withRouter(infoVeterinario);

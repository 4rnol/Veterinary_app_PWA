import React,{useEffect,useState} from "react";
import "./verpubli.css";
import img from "../../assets/Dopi.jpg";
import wat from "../../assets/wats.png";
import {getPublication} from "../../api/BackendConnection/servicePublications"
import { useParams } from "react-router";
const Verpubli = (props) => {
    let { id } = useParams();
    const [publication, setPublication] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPublication(id);
                setPublication(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    const Publication =()=>{
        return (
            <div className="seccion-perfil-usuario">
             <img className="img-detras" src={img} alt=""/>  
       <div className="perfil-usuario-header">
           <div className="perfil-usuario-portada">   
                   <img className="img-perfil" src={publication.urlFoto} alt="img-avatar"></img>        
           </div>
       </div>
       <div className="perfil-usuario-body">
           <div className="perfil-usuario-bio">
               <h3 className="titulo">{publication.title}</h3>
               <p className="texto">{publication.description}</p>
           </div>
           <div className="perfil-usuario-footer">
               <ul className="lista-datos">
                   <li> Direccion:</li>
                   <p className="texto">{publication.veterinary.direction}</p>
                   <li>Veterinaria:</li>
                   <p className="texto">{publication.veterinary.name}</p>
                   <li> Telefono:</li>
                   <img width="13%" height="13%" src={wat}></img>
                   <a className="lin" href={'https://wa.me/'+ publication.veterinary.phone} target="_blank"  >{publication.veterinary.phone}</a>  
                   
               </ul>
           </div>
       </div>
     </div>
       );
    };
    return (
       <div>{publication!==null && <Publication/>}</div> 
    );

};
export default Verpubli;
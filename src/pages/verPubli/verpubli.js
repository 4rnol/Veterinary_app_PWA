import React,{useEffect,useState} from "react";
import "./verpubli.css";
import img from "../../assets/Dopi.jpg";
import {getPublication} from "../../api/BackendConnection/servicePublications"
import { useParams } from "react-router";
import { withRouter,NavLink } from "react-router-dom";

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
                   <div>
                   <p className="texto">{publication.veterinary.vet}</p>
                   <NavLink className="veterinary_link" to={'/veterinary/'+publication.veterinary._id+'/info'}>Ver veterinario</NavLink>
                   </div>
                   
                   <li> Telefono:</li>
                   <a className="lin" href={'https://wa.me/'+ publication.veterinary.phone} target="_blank"  >*{publication.veterinary.phone}</a>  
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
export default withRouter(Verpubli);
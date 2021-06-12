import React from 'react';
import { withRouter } from 'react-router';
import './Publicacion.css'

const Publicacion = (props) => {
    const publication = (id)=>{
        props.history.push('/publications/'+id+'/publication');
    }
    console.log(props.publication);
    return (
        <div className="card" onClick={()=>publication (props.publication._id)}>
            <div className="card-head">
                <div className="perfil">
                    <img className="card-img-perfil" src={props.publication.veterinary.urlImg} alt=""/>
                    <h6>
                        {props.publication.veterinary.name}
                    </h6>
                </div>
                <h6>
                {props.publication.veterinary.vet}
                </h6>
            </div>
            <div className="card-body">
                <p>{props.publication.description}</p>
                <div className="container-img">
                    <img className="card-img-body" src={props.publication.urlFoto} width="300" height="200" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Publicacion);

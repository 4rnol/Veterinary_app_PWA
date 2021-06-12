import * as React from 'react';
import './styles.css';
import { getPendingPublications } from '../../api/BackendConnection/servicePublications';
import { updatePublicationState } from '../../api/BackendConnection/servicePublications';
import img from '../../assets/Dopi.jpg';
import Publicacion from '../verPublicaciones/Publicacion';

const { useEffect, useState } = React;

const CheckPendingPublications = () => {
  const [pendingPublication, setPendingPublications] = useState([]);
  const [openImg,setOpenImg] = useState(false);
  const [modalImgSrc,setModalImgSrc] = useState("");

  useEffect(() => {
    (async function () {
      try {
        const resp = await getPendingPublications();
        setPendingPublications(resp);
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  const popUpImg=(srcImg="")=>{
    setOpenImg((prev)=>{
      setModalImgSrc(srcImg);
      return !prev;
    });
  };
  const acceptPublication=async(idPublication,index)=>{
    try{
      await updatePublicationState("Aceptado",idPublication);
      setPendingPublications(prev=>{
        prev.splice(index,1);
        return [...prev];
      })
    }catch(err){
      console.warn(err);
    }
  };
  const rejectPublication=async(idPublication,index)=>{
    try{
      await updatePublicationState("Rechazado",idPublication);
      setPendingPublications(prev=>{
        prev.splice(index,1);
        return [...prev];
      })
    }catch(err){
      console.warn(err);
    }
  }
  return (
    <div className="checkPub-section">
      <img className="img-detras" src={img} alt="" />
      <h2 className="btn-personalizado title">Publicaciones Pendientes</h2>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Veterinaria</th>
              <th scope="col">Titulo</th>
              <th scope="col">Categoria</th>
              <th scope="col">Imagen</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pendingPublication.length > 0 &&
              pendingPublication.map((pendingPub, index) => {
                return (
                  <tr key={pendingPub._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{pendingPub.veterinary.vet}</td>
                    <td>{pendingPub.title}</td>
                    <td>{pendingPub.category}</td>
                    <td>
                      <img alt="" src={pendingPub.urlFoto} width="80" height="80" onClick={() => popUpImg(pendingPub.urlFoto)} />
                    </td>
                    <td>
                      <button className="btn-primary w-100" onClick={()=>acceptPublication(pendingPub._id,index)}>Aceptar</button>
                      <button className="btn-danger w-100" onClick={()=>rejectPublication(pendingPub._id,index)}>Rechazar</button>
                    </td>
                  </tr>
                );
              })}
              
          </tbody>
        </table>
      </div>
      {openImg &&
        <div id="checkPending-myModal" className="checkPending-modal">
          <span className="checkPending-close" onClick={()=>popUpImg()}>&times;</span>
          <img className="checkPending-modal-content" src={modalImgSrc} alt=""/>
        </div>
      }
    </div>
  );
};

export default CheckPendingPublications;

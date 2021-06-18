import React, { useState, useEffect } from 'react';
import './Publicaciones.css';
import { getPublications } from '../../api/BackendConnection/servicePublications';
import Publicacion from './Publicacion';
import img from '../../assets/Dopi.jpg';

const Publicaciones = () => {
  const [publications, setPublications] = useState([]);
  const [actualiza, setActualiza] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPublications(url);
        setPublications(response);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, [actualiza]);

  return (
    <div className="containerPublications">
      <div id="btns-grupo" className="relleno"></div>
      <img className="img-detras" src={img} alt="" />
      <div className="btn-grupo">
        <button
          className="btn-personalizado"
          onClick={() => {
            setUrl('/category/nutritional/care');
            setActualiza(!actualiza);
          }}>
          Alimentación
        </button>
        <button
          className="btn-personalizado"
          onClick={() => {
            setUrl('/category/diseases');
            setActualiza(!actualiza);
          }}>
          Enfermedades
        </button>
        <button
          className="btn-personalizado"
          onClick={() => {
            setUrl('/category/vaccines');
            setActualiza(!actualiza);
          }}>
          Vacunas
        </button>
      </div>
      {publications.length > 0 &&
        publications.map((publication, index) => {
          return <Publicacion key={index} publication={publication} />;
        })}
      <a href="#btns-grupo" className="btn-flotante-btn">
        <button
          className="btn-button-flot"
          onClick={() => {
            setUrl('');
            setActualiza(!actualiza);
          }}>
          Todo
        </button>
      </a>
    </div>
  );
};

export default Publicaciones;

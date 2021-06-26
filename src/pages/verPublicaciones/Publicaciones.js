import React, { useState, useEffect } from 'react';
import './Publicaciones.css';
import { getPublications } from '../../api/BackendConnection/servicePublications';
import Publicacion from './Publicacion';
import img from '../../assets/Dopi.jpg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterPublications } from '../../redux/actions/index.actions';

const Publicaciones = (props) => {
  const [publications, setPublications] = useState([]);
  const [publicationsFiltered, setPublicationsFiltered] = useState([]);
  const [actualiza, setActualiza] = useState(false);
  const [url, setUrl] = useState('');
  const textFilter = props.filterPubReducer;

  useEffect(() => {
    setPublicationsFiltered(()=>{
      return publications.filter((pub)=>{
        return  pub.title.toLowerCase().includes(textFilter.toLowerCase()) || pub.description.toLowerCase().includes(textFilter.toLowerCase()) || pub.veterinary.vet.toLowerCase().includes(textFilter.toLowerCase());
      });
    });
  }, [textFilter])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await getPublications(url);
        setPublications(response);
        setPublicationsFiltered(response);
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
            props.filterPublications("");

          }}>
          Alimentación
        </button>
        <button
          className="btn-personalizado"
          onClick={() => {
            setUrl('/category/diseases');
            setActualiza(!actualiza);
            props.filterPublications("");

          }}>
          Enfermedades
        </button>
        <button
          className="btn-personalizado"
          onClick={() => {
            setUrl('/category/vaccines');
            setActualiza(!actualiza);
            props.filterPublications("");

          }}>
          Vacunas
        </button>
      </div>
      {publicationsFiltered.length > 0 &&
        publicationsFiltered.map((publication, index) => {
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

const mapStateToProps=(state)=>{
  return {
    filterPubReducer:state.filterPublicationsReducer
  }
};

const mapDispatchToProps = (dispatch) => ({
  filterPublications:(text) => dispatch(filterPublications(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Publicaciones));

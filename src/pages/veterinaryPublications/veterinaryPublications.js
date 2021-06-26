import * as React from 'react';
import { withRouter } from 'react-router';
import { Button, Overlay, Popover, Modal } from 'react-bootstrap';
import img from '../../assets/Dopi.jpg';
import { getPendingPublications } from '../../api/BackendConnection/servicePublications';

const { useState, useEffect, useRef } = React;

const VeterinaryPublications = () => {
  const [pendingPublication, setPendingPublications] = useState([]);
  const [openImg, setOpenImg] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [pubDescription, setPubDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [publicationSelected, setPublicationSelected] = useState(0);
  const [indexPubSelected, setIndexPubSelected] = useState(0);
  const [actionType, setActionType] = useState('');
  const ref = useRef(null);

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

  const popUpImg = (srcImg = '') => {
    setOpenImg((prev) => {
      setModalImgSrc(srcImg);
      return !prev;
    });
  };

  const handleClose=()=>{
    setShowModal(false);
  };

  const handleShow = (idPublication, index, action) => {
    setPublicationSelected(idPublication);
    setIndexPubSelected(index);
    setActionType(action);
    setShowModal(true);
  };

  const handleClick = (event, textDescription) => {
    setShow(!show);
    setPubDescription(textDescription);
    setTarget(event.target);
  };

  return (
    <div className="checkPub-section">
      <img className="img-detras" src={img} alt="" />
      <div className="title-PendingPubBox">
        <h2 className="title-pendingPub">Mis Publicaciones</h2>
      </div>
      <div className="table-responsive">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Veterinaria</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descripcion</th>
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
                    <td>
                      <Button
                        className="btn-primary w-100 h-50"
                        onClick={(event) => handleClick(event, pendingPub.description)}>
                        Ver Descripcion
                      </Button>
                    </td>
                    <td>{pendingPub.category}</td>
                    <td>
                      <img
                        alt=""
                        src={pendingPub.urlFoto}
                        width="80"
                        height="80"
                        onClick={() => popUpImg(pendingPub.urlFoto)}
                      />
                    </td>
                    <td>
                      <button
                        className="btn-primary w-100"
                        onClick={() => handleShow(pendingPub._id, index, 'Aceptar')}>
                        Aceptar
                      </button>
                      <button
                        className="btn-danger w-100"
                        onClick={() => handleShow(pendingPub._id, index, 'Rechazar')}>
                        Rechazar
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <Overlay show={show} target={target} placement="bottom" container={ref.current} containerPadding={20}>
          <Popover id="popover-contained">
            <Popover.Title as="h3">Descripcion</Popover.Title>
            <Popover.Content>{pubDescription}</Popover.Content>
          </Popover>
        </Overlay>
      </div>

      {openImg && (
        <div id="checkPending-myModal" className="checkPending-modal">
          <span className="checkPending-close" onClick={() => popUpImg()}>
            &times;
          </span>
          <img className="checkPending-modal-content" src={modalImgSrc} alt="" />
        </div>
      )}
    </div>
  );
};

export default withRouter(VeterinaryPublications);

import * as React from 'react';
import './RegistrarVeterinario.css';
import { useFiles } from '../../utils/validations/formValidations/useFiles';
import { projectStorage } from '../../api/Firebase/config';
import { useFullName as useName}  from '../../utils/validations/formValidations/useNameForm';
import { useFullName as useLastName } from '../../utils/validations/formValidations/useNameForm';
import { useFullName as useNameVeterinary } from '../../utils/validations/formValidations/useNameForm';
import { useFullName as useDireccion } from '../../utils/validations/formValidations/useNameForm';
import { usePassword } from '../../utils/validations/formValidations/usePasswordForm';
import { usePassword as usePassConfirm } from '../../utils/validations/formValidations/usePasswordForm';
import { usePhone } from '../../utils/validations/formValidations/usePhoneNumberForm';
import CrudVeterinary from '../../api/BackendConnection/CrudVeterinary';
import {useEmail} from '../../utils/validations/formValidations/useEmailForm';
import img from '../../assets/Dopi.jpg';
import { routes } from '../../router/RoutesConstants';
import { Button ,Modal, ModalHeader, ModalFooter, ModalTitle } from 'react-bootstrap';


const {useState, useEffect} = React;
const RegistrarVeterinario = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, handleFileChange, fileError, setFileError, fileMessage, setFileMessage, previewSource] = useFiles();
  const [usrName, handleUserNameChange, userNameError, setUserNameError, userNameMesasge, setUserNameMessage] = useName(3,25);
  const [lastName, handleLastNameChange, lastNameError, setLastNameError, lastNameMesasge, setLastNameMessage] = useLastName(3,25);
  const [veterinary, handleVeterinaryChange, veterinaryError, setVeterinaryError, veterinaryMesasge, setVeterinaryMessage] = useNameVeterinary(3,25);
  const [direccion, handleDireccionChange, direccionError, setDireccionError, direccionMesasge, setDireccionMessage] = useDireccion(3,25);
  const [password, handlePassChange, passwordError, setPasswordError, passMessage, setPassMessage] = usePassword();
  const [passwordConfirm, handlePasswordConfirmChange, passwordConfirmError, setPasswordConfirmError, passwordConfirmMesasge, setPasswordConfirmMessage] = usePassConfirm();
  const [phone, handlePhoneChange, phoneError, setPhoneError, phoneErrorMessage, setPhoneErrorMessage] = usePhone();
  const [email, handleEmailChange, emailError, setEmailError, emailMessage, setEmailMessage] = useEmail();
  const [modalOpen,setModalOpen] = useState(true);

  const registrar = (e) => {
    e.preventDefault();
    if(password===passwordConfirm){
    const storageRef = projectStorage.ref(`Veterinary/${file.name}`);
    storageRef.put(file).on(
      'state_changed',
      () => {},
      (err) => {
        console.log('error' + err);
      },
      async () => {
        await storageRef.getDownloadURL().then((url) => {
          CrudVeterinary.createVeterinary(usrName,lastName,veterinary,email,phone,direccion,url,password)
          .then(resp=>{
              props.history.push(routes.login);
          })
          .catch(err=>{
            console.warn(err);
          })
        });
      },
    );
    }else{
      const confirm_password = document.getElementById("confirm_password");
      confirm_password.setCustomValidity("Contraseñas no coninciden");
    }
  };
  return (
    <div className="register-section">
      <img className="img-detras" src={img} alt="" />
      <div className="register-box">
        <div id="scroll">
          <h1>Registro Veterinario</h1>
          <br />
          <form onSubmit={(event)=>registrar(event)}>
            <label htmlFor="username">Nombres*:</label>
            <input
              type="text"
              className="input-registrarVeterinario"
              placeholder="Ingrese Nombre"
              required
              pattern="[A-Z a-z]+"
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleUserNameChange(target.value)}
            />
            <br />
            <label htmlFor="username">Apellidos*:</label>
            <input
              type="text"
              className="input-registrarVeterinario"
              placeholder="Ingrese Apellido"
              required
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleLastNameChange(target.value)}
            />
            <br />
            <label htmlFor="email">Correo Electrónico*:</label>
            <input
              type="email"
              className="input-registrarVeterinario"
              placeholder="Ingrese Correo"
              required
              minLength="15"
              maxLength="50"
              onChange={({target})=>handleEmailChange(target.value)}
            />
            <br />
            <label htmlFor="phone">Teléfono*:</label>
            <input
              type="number"
              className="input-registrarVeterinario"
              placeholder="Ingrese Numero"
              required
              pattern="[1-9]+"
              maxLength="7"
              min = "60000000"
              max = "80000000"
              onChange={({target})=>handlePhoneChange(target.value)}
            />
            <br />
            <label htmlFor="password">Contraseña*:</label>
            <input
              type="password"
              className="input-registrarVeterinario"
              placeholder="Ingrese contraseña"
              required
              id="password"
              minLength="5"
              maxLength="25"
              onChange={({target})=>handlePassChange(target.value)}
            />
            <br />
            <label htmlFor="password">Confirmar contraseña*:</label>
            <input
              type="password"
              className="input-registrarVeterinario"
              placeholder="Confirmar Contraseña"
              id="confirm_password" 
              required
              minLength="5"
              maxLength="25"
              onChange={({target})=>handlePasswordConfirmChange(target.value)}
            />
            <br />
            <label htmlFor="username">Nombre de Veterinaria:</label>
            <input
              type="text"
              className="input-registrarVeterinario"
              placeholder="Ingrese nombre"
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleVeterinaryChange(target.value)}
            />
            <br />
            <label htmlFor="direction">Dirección:</label>
            <input
              type="text"
              className="input-registrarVeterinario"
              placeholder="Ingrese Direccion"
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleDireccionChange(target.value)}
            />
            <label htmlFor="username">Agregar Imagen:</label>
            <input
              type="file"
              className="input-registrarVeterinario"
              placeholder="Ingrese imagen"
              onChange={({ target }) => handleFileChange(target.files[0])}
            />

            {
              previewSource !=="" && <img href="img" alt="" src={previewSource} width='100%' height="220px"/>
            }
            <button type="submit"  onClick={handleShow}>Registrar</button>
            <Modal  centered  size='lg' className="modalPublicacion" show={show} onHide={handleClose}>
          <Modal.Title >Aviso</Modal.Title>
        <Modal.Body>Registro Exitoso.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  onClick={handleClose} >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarVeterinario;

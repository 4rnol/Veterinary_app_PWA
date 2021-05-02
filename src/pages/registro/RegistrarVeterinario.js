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

const RegistrarVeterinario = (props) => {
  const [file, handleFileChange, fileError, setFileError, fileMessage, setFileMessage, previewSource] = useFiles();
  const [usrName, handleUserNameChange, userNameError, setUserNameError, userNameMesasge, setUserNameMessage] = useName(3,25);
  const [lastName, handleLastNameChange, lastNameError, setLastNameError, lastNameMesasge, setLastNameMessage] = useLastName(3,25);
  const [veterinary, handleVeterinaryChange, veterinaryError, setVeterinaryError, veterinaryMesasge, setVeterinaryMessage] = useNameVeterinary(3,25);
  const [direccion, handleDireccionChange, direccionError, setDireccionError, direccionMesasge, setDireccionMessage] = useDireccion(3,25);
  const [password, handlePassChange, passwordError, setPasswordError, passMessage, setPassMessage] = usePassword();
  const [passwordConfirm, handlePasswordConfirmChange, passwordConfirmError, setPasswordConfirmError, passwordConfirmMesasge, setPasswordConfirmMessage] = usePassConfirm();
  const [phone, handlePhoneChange, phoneError, setPhoneError, phoneErrorMessage, setPhoneErrorMessage] = usePhone();
  const [email, handleEmailChange, emailError, setEmailError, emailMessage, setEmailMessage] = useEmail();

  const registrar = (e) => {
    e.preventDefault();
    if(password===passwordConfirm){
    const storageRef = projectStorage.ref(file.name);
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
            console.log(resp)
          })
          .catch(err=>{
            console.log(err);
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
      <div className="register-box">
        <div id="scroll">
          <h1>Registrar Veterinaria</h1>
          <br />
          <form onSubmit={(event)=>registrar(event)}>
            <label htmlFor="username">Nombre:</label>
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
            <label htmlFor="username">Apellido:</label>
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
            <label htmlFor="email">Correo Electronico:</label>
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
            <label htmlFor="phone">Telefono:</label>
            <input
              type="number"
              className="input-registrarVeterinario"
              placeholder="Ingrese Numero"
              required
              pattern="[1-9]+"
              minLength="7"
              maxLength="7"
              onChange={({target})=>handlePhoneChange(target.value)}
            />
            <br />
            <label htmlFor="password">Contraseña:</label>
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
            <label htmlFor="password">Confirmar contraseña:</label>
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
              required
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleVeterinaryChange(target.value)}
            />
            <br />
            <label htmlFor="direction">Direccion:</label>
            <input
              type="text"
              className="input-registrarVeterinario"
              placeholder="Ingrese Direccion"
              required
              minLength="3"
              maxLength="25"
              onChange={({target})=>handleDireccionChange(target.value)}
            />
            <label htmlFor="username">Agregar Imagen:</label>
            <input
              type="file"
              className="input-registrarVeterinario"
              placeholder="Ingrese imagen"
              required
              onChange={({ target }) => handleFileChange(target.files[0])}
            />

            <iframe desciption="iframe" data="application" src={previewSource} />
            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrarVeterinario;

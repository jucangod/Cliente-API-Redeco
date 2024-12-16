import React, { useRef, useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { validateLogin } from './validation'; // Importamos la función de validación

import './Login.css';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensajes de error

  const { changeView, logUser } = React.useContext(AppContext);

  const onLoginSuccess = (user) => {
    // Llamar a logUser para almacenar al usuario autenticado
    logUser(user);

    // Cambiar la vista
    changeView();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    const username = userRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Validar y autenticar
      const response = await validateLogin(username, password);
      const { token_access } = response.user;
      localStorage.setItem('token_access', token_access);
      // Si la autenticación es exitosa
      onLoginSuccess(response.user);
    } catch (error) {
      console.error(error);
      // Si ocurre un error, actualizamos el estado del mensaje
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit} className="login-form">
        <CustomText id="login-sesion">Iniciar Sesión</CustomText>
        {errorMessage && (
          <div className="error-message">
            {errorMessage} {/* Mostrar mensaje de error */}
          </div>
        )}
        <div className="input-wrapper">
          <CustomInput
            ref={userRef}
            type="text"
            placeholder="Introduzca su usuario"
            className="input-field"
          />
          <i className="material-symbols-rounded">person</i>
        </div>
        <div className="input-wrapper">
          <CustomInput
            ref={passwordRef}
            type="password"
            placeholder="Introduzca su contraseña"
            className="input-field"
          />
          <i className="material-symbols-rounded">lock</i>
        </div>
        <CustomButton type="submit" className="login-button">
          Ingresar
        </CustomButton>
        <CustomText onClick={changeView} className="signup-text">
          ¿Aún no tienes cuenta? Crea una
        </CustomText>
      </form>
    </div>
  );
}

export { Login };

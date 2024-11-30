import React, { useRef, useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { handleSubmit } from './validation'; // Importamos la función de manejo de envío de formulario

import './Login.css';

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensajes de error

    const { changeView, logUser } = React.useContext(AppContext);

    return (
        <div className='login-container'>
            <form onSubmit={(e) => handleSubmit(e, userRef, passwordRef, setErrorMessage, logUser)} className='login-form'>
                <CustomText id='login-sesion'>Iniciar Sesión</CustomText>
                {errorMessage && (
                    <div className='error-message'>
                        {errorMessage} {/* Mostrar mensaje de error */}
                    </div>
                )}
                <div className='input-wrapper'>
                    <CustomInput
                        ref={userRef}
                        type='text'
                        placeholder='Introduzca su usuario'
                        className='input-field'
                    />
                    <i className="material-symbols-rounded">person</i>
                </div>
                <div className='input-wrapper'>
                    <CustomInput
                        ref={passwordRef}
                        type='password'
                        placeholder='Introduzca su contraseña'
                        className='input-field'
                    />
                    <i className="material-symbols-rounded">lock</i>
                </div>
                <CustomButton type="submit" className='login-button'>
                    Ingresar
                </CustomButton>
                <CustomText onClick={changeView} className='signup-text'>
                    ¿Aún no tienes cuenta? Crea una
                </CustomText>
            </form>
        </div>
    );
}

export { Login };
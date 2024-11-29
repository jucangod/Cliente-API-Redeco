import React, { useRef } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { validateLogin } from './validation'; // Importamos la función de validación
import './Login.css';

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();

    const { changeView, logUser } = React.useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Llamamos a la función de validación
        validateLogin(userRef, passwordRef)
            .then((response) => {
                alert(response.message); // Muestra el mensaje de éxito
                logUser(); // Cambia el estado de usuario logueado
            })
            .catch((error) => {
                alert(error.message); // Muestra el error si no se loguea correctamente
            });
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <CustomText id='login-sesion'>
                    Iniciar Sesión
                </CustomText>
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
};

export { Login };
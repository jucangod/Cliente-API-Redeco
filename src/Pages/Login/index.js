import React, { useRef, useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { login } from '../../Services/login'; // Importamos la función de autenticación

import './Login.css';

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensajes de error

    const { changeView, logUser } = React.useContext(AppContext);

    const onLoginSuccess = () => {
        // Aquí puedes cambiar la vista a la vista principal o donde quieras después de un login exitoso
        changeView(); // Esto puede ser para cambiar a la vista del logueado
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevenir el envío por defecto del formulario

        // Intentamos hacer login con los valores de los inputs
        try {
            const response = login({
                username: userRef.current.value,
                password: passwordRef.current.value,
            });

            // Si la autenticación es exitosa
            logUser(response.user); // Llamar al método para guardar el usuario autenticado
            onLoginSuccess(); // Cambiar la vista si el login es exitoso
        } catch (error) {
            // Si ocurre algún error (campo vacío, usuario o contraseña incorrectos)
            setErrorMessage(error.message);
        }
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleFormSubmit} className='login-form'>
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
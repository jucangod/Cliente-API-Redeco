import React, { useRef, useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { handleSubmit } from './verification'; // Importamos la función de manejo de envío de formulario

import './SignUp.css';

function SignUp() {
    const userRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const keyRef = useRef();
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensajes de error

    const { changeView } = React.useContext(AppContext);

    return (
        <div className="signup-container">
            <form 
                onSubmit={(e) => handleSubmit(e, userRef, passwordRef, confirmPasswordRef, keyRef, setErrorMessage, changeView)} 
                className="signup-form"
            >
                <CustomText id="signup-sesion">Registrarse</CustomText>
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
                <div className="input-wrapper">
                    <CustomInput
                        ref={confirmPasswordRef}
                        type="password"
                        placeholder="Confirme su contraseña"
                        className="input-field"
                    />
                    <i className="material-symbols-rounded">lock</i>
                </div>
                <div className="input-wrapper">
                    <CustomInput
                        ref={keyRef}
                        type="text"
                        placeholder="Introduzca su key"
                        className="input-field"
                    />
                    <i className="material-symbols-rounded">key</i>
                </div>
                <CustomButton type="submit" className="signup-button">
                    Registrar
                </CustomButton>
                <CustomText onClick={changeView} className="login-text">
                    ¿Ya tienes una cuenta? Ingresa
                </CustomText>
            </form>
        </div>
    );
}

export { SignUp };
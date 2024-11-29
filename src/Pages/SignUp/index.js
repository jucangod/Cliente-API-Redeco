import React, { useRef } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import { handleVerification } from './verification';
import './SignUp.css';

function SignUpForm() {
    const userRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const keyRef = useRef();

    const { changeView } = React.useContext(AppContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        handleVerification(userRef, passwordRef, confirmPasswordRef, keyRef)
            .then((response) => {
                alert(response.message); // Mostrar mensaje de éxito
                changeView(); // Cambiar la vista al login
            })
            .catch((error) => {
                alert(error.message); // Mostrar mensaje de error
            });
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <CustomText id="signup-sesion">Registrarse</CustomText>
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

export { SignUpForm };
import React from 'react'
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import './SignUp.css'

function SignUpForm() {
    const {
        changeView
    } = React.useContext(AppContext);

    return (
        <div className='signup-container'>
            <form action='#' className='signup-form'>
                <CustomText
                    id='signup-sesion'
                >
                    Registrarse
                </CustomText>
                <div className='input-wrapper'>
                    <CustomInput 
                        type='user'
                        placeholder='Introduzca su usuario'
                        className='input-field'
                    />
                    <i class="material-symbols-rounded">
                        person
                    </i>
                </div>
                <div className='input-wrapper'>
                    <CustomInput 
                        type='password'
                        placeholder='Introduzca su contraseña'
                        className='input-field'
                    />
                    <i class="material-symbols-rounded">
                        lock
                    </i>
                </div>
                <div className='input-wrapper'>
                    <CustomInput 
                        type='confirm-password'
                        placeholder='Confirme su contraseña'
                        className='input-field'
                    />
                    <i class="material-symbols-rounded">
                        lock
                    </i>
                </div>
                <div className='input-wrapper'>
                    <CustomInput 
                        type='key'
                        placeholder='Introduzca su key'
                        className='input-field'
                    />
                    <i class="material-symbols-rounded">
                        key
                    </i>
                </div>

                <CustomButton
                    className='signup-button'
                >
                    Registrar
                </CustomButton>
                <CustomText
                    onClick={changeView}
                    className='login-text'
                >
                    ¿Ya tienes una cuenta? Ingresa
                </CustomText>
            </form>
        </div>
    );
};

export { SignUpForm };
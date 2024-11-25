import React from 'react'
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../../Services/ChangeUserView';
import './Login.css'

function Login() {
    const {
        changeView,
        logUser
    } = React.useContext(AppContext);

    return (
        <div className='login-container'>
            <form action='#' className='login-form'>
                <CustomText
                    id='login-sesion'
                >
                    Iniciar Sesión
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
                <CustomButton
                    onClick={logUser}
                    className='login-button'
                >
                    Ingresar
                </CustomButton>
                <CustomText
                    onClick={changeView}
                    className='signup-text'
                >
                    ¿Aún no tienes cuenta? Crea una
                </CustomText>
            </form>
        </div>
    );
};

export { Login };

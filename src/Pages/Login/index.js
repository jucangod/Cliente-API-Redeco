import React from 'react'
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';
import { AppContext } from '../Services/ChangeUserView';

function Login() {
    const {
        changeView,
        logUser
    } = React.useContext(AppContext);

    return (
        <div>
            <div className='login-user'>
                <CustomText
                    className='text-user'
                >
                    Usuario
                </CustomText>
                <CustomInput 
                    type='user'
                    placeholder='Introduzca su usuario'
                    className='input-user'
                />
                <CustomText
                    className='text-user'
                >
                    Contraseña
                </CustomText>
                <CustomInput 
                    type='password'
                    placeholder='Introduzca su contraseña'
                    className='input-user'
                />
            </div>
            <div className='login-button'>
                <CustomButton
                    onClick={logUser}
                >
                    Ingresar
                </CustomButton>
                <CustomText
                    onClick={changeView}
                >
                    ¿Aún no tienes cuenta? Crea una
                </CustomText>
            </div>
        </div>
    );
};

export { Login };

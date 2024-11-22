import React from 'react'
import { CustomText } from '../../Components/Text';
import { CustomButton } from '../../Components/Button';
import { CustomInput } from '../../Components/Input';

function SignUp() {
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
                <CustomText
                    className='text-user'
                >
                    Confirme su contraseña
                </CustomText>
                <CustomInput 
                    type='password'
                    placeholder='Confirme su contraseña'
                    className='input-user'
                />
                <CustomText
                    className='text-user'
                >
                    Key
                </CustomText>
                <CustomInput 
                    type='key'
                    placeholder='Key'
                    className='input-user'
                />
            </div>
            <div className='signup-button'>
                <CustomButton>
                    Registrar
                </CustomButton>
                <CustomText
                    onClick=''
                >
                    ¿Ya tienes una cuenta? Ingresa
                </CustomText>
            </div>
        </div>
    );
};

export { SignUp };
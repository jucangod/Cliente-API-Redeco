import React from 'react'
import { CustomButton } from '../../Components/Button';
import { AppContext } from '../../Services/ChangeUserView';
import './LoggedHeader.css'

function LoggedHeader() {
    const {
        logUser,
        changeComplaints
    } = React.useContext(AppContext);

    return (
        <div id='header-section'>
            <CustomButton 
                className='complaint-button'
                onClick={() => changeComplaints('ver')}
            >
                Ver
            </CustomButton>
            <CustomButton
                className='complaint-button'
                onClick={() => changeComplaints('crear')}
            >
                Crear
            </CustomButton>
            <CustomButton
                className='complaint-button'
                onClick={logUser}
            >
                Cerrar Sesión
            </CustomButton>
        </div>
    )
}

export { LoggedHeader}
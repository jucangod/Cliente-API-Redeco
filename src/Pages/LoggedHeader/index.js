import React from 'react'
import { CustomButton } from '../../Components/Button';
import { AppContext } from '../../Services/ChangeUserView';

function LoggedHeader() {
    const {
        logUser,
        changeComplaints
    } = React.useContext(AppContext);

    return (
        <>
            <CustomButton
                onClick={() => changeComplaints('ver')}
            >
                Ver
            </CustomButton>
            <CustomButton
                onClick={() => changeComplaints('crear')}
            >
                Crear
            </CustomButton>
            <CustomButton
                onClick={logUser}
            >
                Cerrar Sesión
            </CustomButton>
        </>
    )
}

export { LoggedHeader}
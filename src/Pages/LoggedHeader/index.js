import React from 'react';
import { CustomButton } from '../../Components/Button';
import { AppContext } from '../../Services/ChangeUserView';
import { CustomModal } from '../../Components/Modal';
import './LoggedHeader.css';

function LoggedHeader() {
  const { logUser, changeComplaints, handleClose, isModalOpen, cancelClose } =
    React.useContext(AppContext);

  return (
    <div id="header-section">
      <CustomButton
        className="complaint-button"
        onClick={() => changeComplaints('ver')}
      >
        Ver
      </CustomButton>
      <CustomButton
        className="complaint-button"
        onClick={() => changeComplaints('crear')}
      >
        Crear
      </CustomButton>
      <CustomButton className="complaint-button" onClick={handleClose}>
        Cerrar Sesión
      </CustomButton>
      <CustomModal
        isOpen={isModalOpen}
        message="¿Estás seguro de que deseas cerrar sesión?"
        onConfirm={() => {
          logUser();
          localStorage.removeItem('token_access');
        }}
        onCancel={cancelClose}
      />
    </div>
  );
}

export { LoggedHeader };

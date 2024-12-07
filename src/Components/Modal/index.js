import React from 'react';
import { CustomButton } from '../Button';

const CustomModal = ({ isOpen, title, message, onConfirm, onCancel, onClose, isSuccess }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">
                    {title}
                </h2>
                <p className="modal-message">{message}</p>
                <div className={`modal-buttons ${isSuccess ? 'center' : ''}`}>
                    {isSuccess ? (
                        <CustomButton type='button' className="modal-button confirm" onClick={onClose}>
                            Cerrar
                        </CustomButton>
                    ) : (
                        <>
                            <button className="modal-button confirm" onClick={onConfirm}>
                                Confirmar
                            </button>
                            <button className="modal-button cancel" onClick={onCancel}>
                                Cancelar
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export { CustomModal };
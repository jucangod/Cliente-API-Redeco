import React from 'react';

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
                        <button className="modal-button confirm" onClick={onClose}>
                            Cerrar
                        </button>
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
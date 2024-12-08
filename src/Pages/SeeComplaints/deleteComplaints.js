import { useState } from 'react';
import { deleteComplaint } from '../../Services/complaints.service';

const useDeleteComplaints = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [errorDelete, setErrorDelete] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFolio, setSelectedFolio] = useState(null);
    const [isSuccess, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleDelete = (folio) => {
        setSelectedFolio(folio);
        setModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            setLoadingDelete(true);
            await deleteComplaint(selectedFolio);
            console.log(`Queja con folio ${selectedFolio} eliminada exitosamente.`);
            setSuccess(true); // Establecemos isSuccess en true
            setSuccessMessage(`Queja con folio ${selectedFolio} eliminada exitosamente.`); // Establecemos el mensaje de éxito
            console.log(successMessage)
        } catch (error) {
            console.error('Error al eliminar la queja:', error);
            setErrorDelete('Hubo un error al eliminar la queja.');
        } finally {
            setLoadingDelete(false);
            setModalOpen(false); // Cerrar el modal de confirmación
            setSelectedFolio(null);
        }
    };

    const cancelDelete = () => {
        setModalOpen(false);
        setSelectedFolio(null);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSuccess(false);
        setSuccessMessage('');
    };

    return {
        handleDelete,
        confirmDelete,
        cancelDelete,
        loadingDelete,
        errorDelete,
        isModalOpen,
        isSuccess,
        closeModal,
        successMessage
    };
};

export { useDeleteComplaints };
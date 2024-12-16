import { useState } from 'react';
import { deleteComplaint } from '../../Services/complaints.service';
import { useFilteredComplaints } from './filterComplaints';

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

    const {
        setFilteredComplaints,
        filteredComplaints,
        setComplaints,
        applyComplaints,
    } = useFilteredComplaints();

    const confirmDelete = async () => {
        try {
            setLoadingDelete(true);
            console.log(`Eliminando la queja con folio: ${selectedFolio}`);
            await deleteComplaint(selectedFolio);

            // Actualizar estados sincronizados
            const updatedComplaints = (prevComplaints) =>
                prevComplaints.filter((complaint) => complaint.QuejasFolio !== selectedFolio);

            setComplaints(updatedComplaints);
            setFilteredComplaints(updatedComplaints);

            setSuccess(true);
            setSuccessMessage(`Queja con folio ${selectedFolio} eliminada exitosamente.`);
            setErrorDelete('');
        } catch (error) {
            console.error('Error al eliminar la queja:', error.message || 'Error desconocido');
            setErrorDelete(error.message || 'Hubo un error al eliminar la queja.');
        } finally {
            setLoadingDelete(false);
            setModalOpen(false);
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

        applyComplaints(setComplaints, setFilteredComplaints, setLoadingDelete);
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
        successMessage,
    };
};

export { useDeleteComplaints };
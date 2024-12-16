import { useState } from 'react';
import { deleteComplaint, getAllComplaints } from '../../Services/complaints.service';
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
        setComplaints,
        setFilteredComplaints,
        filteredComplaints
    } = useFilteredComplaints();

    const confirmDelete = async () => {
        try {
            setLoadingDelete(true);
            console.log(`Eliminando la queja con folio: ${selectedFolio}`);
            console.log('Quejas antes de eliminarse ', filteredComplaints);
            
            // Llamar a la función de eliminación
            await deleteComplaint(selectedFolio); // Simula la eliminación
    
            // Actualiza filteredComplaints eliminando la queja
            setFilteredComplaints((prevFilteredComplaints) => {
                const setFilteredComplaints = prevFilteredComplaints.filter(
                    (complaint) => complaint.QuejasFolio !== selectedFolio
                );
                console.log('Lista de quejas después de la eliminación (Filtered Complaints):', setFilteredComplaints);
                return setFilteredComplaints;
            });

            setSuccess(true);
            setSuccessMessage(`Queja con folio ${selectedFolio} eliminada exitosamente.`);
            setErrorDelete('');
        } catch (error) {
            const parsedError = error?.message ? JSON.parse(error.message) : { message: 'Error desconocido.' };
            console.error('Error al eliminar la queja:', parsedError.message);
            setErrorDelete(parsedError.message || 'Hubo un error al eliminar la queja.');
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
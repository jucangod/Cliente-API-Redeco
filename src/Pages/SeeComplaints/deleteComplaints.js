import { useState } from 'react';
import { deleteComplaint } from '../../Services/complains.service';

const useDeleteComplaints = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = async (folio) => {
        const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar esta queja?');

        if (isConfirmed) {
            try {
                setLoading(true);
                await deleteComplaint(folio);
                console.log(`Queja con folio ${folio} eliminada exitosamente.`);
            } catch (error) {
                console.error('Error al eliminar la queja:', error);
                setError('Hubo un error al eliminar la queja.');
            } finally {
                setLoading(false);
            }
        }
    };

    return {
        handleDelete,
        loading,
        error,
    };
};

export { useDeleteComplaints };
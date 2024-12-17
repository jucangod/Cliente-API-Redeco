import { useState, useEffect } from 'react';
import { getAllComplaints, deleteComplaint } from '../../Services/complaints.service'; // Importar servicio

const useFilteredComplaints = () => {
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [formRef, setFormRef] = useState(null);
    const [complaints, setComplaints] = useState([]);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [errorDelete, setErrorDelete] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFolio, setSelectedFolio] = useState(null);
    const [isSuccess, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [complaintsToDelete, setComplaintsToDelete] = useState([]);

    // Función para cargar las quejas
    const applyComplaints = async (setComplaints, setFilteredComplaints, setLoading) => {
        setLoading(true);  // Establecemos loading como true al inicio de la carga
        try {
            // Simulamos el retraso de la carga de datos
            setTimeout(async () => {
                const { data } = await getAllComplaints(); // Obtener quejas desde el servicio
                const filteredData = data.filter(
                    (complaint) => !complaintsToDelete.includes(complaint.QuejasFolio)
                );
                setComplaints(filteredData);
                setFilteredComplaints(filteredData);
                setLoading(false); // Finalmente cambiamos el estado de loading a false
            }, 2000); // Simula un retraso de 2 segundos
        } catch (error) {
            console.error('Error al cargar quejas:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        applyComplaints(setComplaints, setFilteredComplaints, setLoading);
    }, []);

    const convertToDate = (dateString) => {
        if (!dateString) return null; // Manejo de casos nulos o vacíos
    
        // Verificar si la fecha está en formato 'YYYY-MM-DD'
        const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(dateString); // Regex para 'YYYY-MM-DD'
        if (isIsoDate) {
            return dateString; // Ya está en el formato correcto
        }
    
        // Si no está en formato ISO, asumir que es 'DD/MM/YYYY'
        const parts = dateString.split('/');
        if (parts.length !== 3) {
            console.error(`Formato incorrecto: ${dateString}`);
            return null;
        }
    
        const [day, month, year] = parts;
        // Reorganizar la fecha en formato YYYY-MM-DD
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    // Función para aplicar filtros
    const handleApplyFilters = () => {
        const lowerCaseFolio = folio.toLowerCase();
        const filtered = complaints.filter((complaint) => {
            const folioMatch = !folio || complaint.QuejasFolio.toLowerCase().includes(lowerCaseFolio);
            const estadoMatch = !estadoQueja || complaint.QuejasEstatus.toString() === estadoQueja.toString();
    
            // Convertir fechas usando la función externa
            const fechaComplaint = convertToDate(complaint.QuejasFecRecepcion);
            const fechaDesdeDate = fechaDesde ? convertToDate(fechaDesde) : null;
            const fechaHastaDate = fechaHasta ? convertToDate(fechaHasta) : null;
    
            const fechaDesdeMatch = !fechaDesdeDate || fechaComplaint >= fechaDesdeDate;
            const fechaHastaMatch = !fechaHastaDate || fechaComplaint <= fechaHastaDate;
    
            return folioMatch && estadoMatch && fechaDesdeMatch && fechaHastaMatch;
        }).filter((complaint) => !complaintsToDelete.includes(complaint.QuejasFolio));
    
        setFilteredComplaints(filtered);
    };

    const handleClear = () => {
        setFolio('');
        setEstadoQueja('');
        setFechaDesde('');
        setFechaHasta('');
        setFilteredComplaints(complaints); // Restablecer a la lista completa de quejas

        // Recargar las quejas luego de limpiar los filtros
        applyComplaints(setComplaints, setFilteredComplaints, setLoading);
    };

    const handleDelete = (folio) => {
        setSelectedFolio(folio);
        setModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            setLoadingDelete(true);
            console.log(`Eliminando la queja con folio: ${selectedFolio}`);
            await deleteComplaint(selectedFolio);
    
            // Agregar la queja al arreglo de quejas a eliminar
            setComplaintsToDelete((prev) => [...prev, selectedFolio]);
    
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
        filteredComplaints,
        setFilteredComplaints,
        loading,
        setLoading,
        folio,
        setFolio,
        estadoQueja,
        setEstadoQueja,
        fechaDesde,
        setFechaDesde,
        fechaHasta,
        setFechaHasta,
        handleApplyFilters,
        handleClear,
        formRef,
        complaints,
        applyComplaints,
        loadingDelete,
        errorDelete,
        isModalOpen,
        isSuccess,
        successMessage,
        handleDelete,
        confirmDelete,
        cancelDelete,
        closeModal
    };
};

export { useFilteredComplaints };
import { useState, useEffect } from 'react';
import { getAllComplains } from '../../Services/complains.service'; // Importa tu servicio

const useFilteredComplaints = () => {
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [formRef, setFormRef] = useState(null);

    // Función para convertir fecha de formato 'DD/MM/YYYY' a 'YYYY-MM-DD'
    const formatDate = (dateStr) => {
        if (!dateStr) return null;
        const [day, month, year] = dateStr.split('/');
        return `${year}-${month}-${day}`; // Formato 'YYYY-MM-DD'
    };

    // Función para cargar las quejas
    const loadComplaints = async () => {
        setLoading(true);
        const complaints = await getAllComplains();
        setLoading(false);
        setFilteredComplaints(complaints);
    };

    useEffect(() => {
        loadComplaints();
    }, []);

    // Función para aplicar filtros
    const handleApplyFilters = () => {
        let filteredData = filteredComplaints;

        // Filtrar por Folio
        if (folio) {
            filteredData = filteredData.filter((complaint) =>
                complaint.QuejasFolio.includes(folio)
            );
        }

        // Filtrar por Estado de la Queja
        if (estadoQueja) {
            filteredData = filteredData.filter(
                (complaint) => complaint.QuejasEstatus === parseInt(estadoQueja)
            );
        }

        // Filtrar por fecha desde
        if (fechaDesde) {
            const formattedFechaDesde = formatDate(fechaDesde); // Formato 'YYYY-MM-DD'
            filteredData = filteredData.filter(
                (complaint) => new Date(complaint.QuejasFecRecepcion) >= new Date(formattedFechaDesde)
            );
        }

        // Filtrar por fecha hasta
        if (fechaHasta) {
            const formattedFechaHasta = formatDate(fechaHasta); // Formato 'YYYY-MM-DD'
            filteredData = filteredData.filter(
                (complaint) => new Date(complaint.QuejasFecRecepcion) <= new Date(formattedFechaHasta)
            );
        }

        setFilteredComplaints(filteredData);
    };

    const handleClear = () => {
        setFolio('');          // Resetea el valor de folio
        setEstadoQueja('');    // Resetea el valor de estado de queja
        setFechaDesde('');     // Resetea el valor de fecha desde
        setFechaHasta('');     // Resetea el valor de fecha hasta
        loadComplaints();      // Vuelve a cargar todas las quejas
    };
    
    return {
        filteredComplaints,
        loading,
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        handleDelete: (folio) => {
            const updatedComplaints = filteredComplaints.filter(
                (complaint) => complaint.QuejasFolio !== folio
            );
            setFilteredComplaints(updatedComplaints);
        },
        handleApplyFilters,
        handleClear,
        formRef,
    };
};

export { useFilteredComplaints };
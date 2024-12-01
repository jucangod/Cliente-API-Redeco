import { useState, useRef } from 'react';

export const useFilteredComplaints = (complaints) => {
    const formRef = useRef(null);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');

    const [filteredComplaints, setFilteredComplaints] = useState(complaints); // Estado para almacenar las quejas filtradas

    // Manejador para actualizar los filtros
    const handleFilterChange = (event) => {
        const { id, value } = event.target;

        // Usar los setters correspondientes según el id
        if (id === 'folio') {
            setFolio(value);
        } else if (id === 'estadoQueja') {
            setEstadoQueja(value);
        } else if (id === 'fechaDesde') {
            setFechaDesde(value);
        } else if (id === 'fechaHasta') {
            setFechaHasta(value);
        }
    };

    // Aplicar los filtros solo al hacer clic
    const handleApplyFilters = () => {

        const result = complaints.filter((complaint) => {
            const matchesFolio = !folio || complaint.folio.includes(folio);
            const matchesEstado = !estadoQueja || estadoQueja === '0' || complaint.estado === estadoQueja; // Ignora si estadoQueja es '0'
            const matchesFechaDesde = !fechaDesde || new Date(complaint.fecha) >= new Date(fechaDesde);
            const matchesFechaHasta = !fechaHasta || new Date(complaint.fecha) <= new Date(fechaHasta);

            // matchesAll es verdadero si todos los filtros no vacíos coinciden
            const matchesAll = matchesFolio && matchesEstado && matchesFechaDesde && matchesFechaHasta;

            return matchesAll;
        });

        // Depurar los resultados del filtrado
        console.log('Resultados del filtrado:', result); // Muestra las quejas filtradas
        setFilteredComplaints(result);
    };

    const handleClear = () => {
        setFolio('');
        setEstadoQueja('');
        setFechaDesde('');
        setFechaHasta('');
        setFilteredComplaints(complaints);
    }

    return {
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        filteredComplaints,
        handleFilterChange,
        handleApplyFilters,
        formRef,
        handleClear // Devuelve la función para aplicarla al hacer clic
    };
};
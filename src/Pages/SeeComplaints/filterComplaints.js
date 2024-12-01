import { useState } from 'react';

export const useFilteredComplaints = (complaints) => {
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');

    const [filteredComplaints, setFilteredComplaints] = useState(complaints); // Estado para almacenar las quejas filtradas

    // Manejador para actualizar los filtros
    const handleFilterChange = (event) => {
        const { id, value } = event.target;

        // Depurar para ver qué campo está cambiando y su valor
        console.log('Cambio en el campo: ${id}, Nuevo valor: ${value})');

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
        // Depurar los valores actuales de los filtros antes de aplicarlos
        console.log('Filtros actuales:', { folio, estadoQueja, fechaDesde, fechaHasta });

        const result = complaints.filter((complaint) => {
            const matchesFolio = !folio || complaint.folio.includes(folio);
            const matchesEstado = !estadoQueja || estadoQueja === '0' || complaint.estado === estadoQueja; // Ignora si estadoQueja es '0'
            const matchesFechaDesde = !fechaDesde || new Date(complaint.fecha) >= new Date(fechaDesde);
            const matchesFechaHasta = !fechaHasta || new Date(complaint.fecha) <= new Date(fechaHasta);

            // matchesAll es verdadero si todos los filtros no vacíos coinciden
            const matchesAll = matchesFolio && matchesEstado && matchesFechaDesde && matchesFechaHasta;

            // Log para depurar cada queja
            console.log(`Chequeando queja con folio ${complaint.folio}:`, {
                matchesFolio,
                matchesEstado,
                matchesFechaDesde,
                matchesFechaHasta,
                matchesAll,
            });

            return matchesAll;
        });

        // Depurar los resultados del filtrado
        console.log('Resultados del filtrado:', result); // Muestra las quejas filtradas
        setFilteredComplaints(result);
    };

    return {
        folio, setFolio,
        estadoQueja, setEstadoQueja,
        fechaDesde, setFechaDesde,
        fechaHasta, setFechaHasta,
        filteredComplaints,
        handleFilterChange,
        handleApplyFilters, // Devuelve la función para aplicarla al hacer clic
    };
};
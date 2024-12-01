import { useState, useRef, useEffect } from 'react';

// Personalizamos el hook para manejar la carga asíncrona y los filtros
export const useFilteredComplaints = () => {
    const formRef = useRef(null);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [complaints, setComplaints] = useState([]); // Estado para las quejas cargadas
    const [filteredComplaints, setFilteredComplaints] = useState([]); // Quejas filtradas
    const [loading, setLoading] = useState(true); // Estado de carga

    // Fetch de quejas de manera asíncrona
    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                // Simulamos una llamada asíncrona a una API
                const data = await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve([
                            { folio: '123', razonSocial: 'Empresa A', fecha: '2024-11-01', medio: 'Teléfono', estado: 'Pendiente', causa: 'Mala atención', entidad: 'Entidad 1' },
                            { folio: '124', razonSocial: 'Empresa B', fecha: '2024-10-02', medio: 'Correo electrónico', estado: 'Concluido', causa: 'Producto defectuoso', entidad: 'Entidad 2' },
                        ]);
                    }, 2000) // Simulamos un retraso de 2 segundos
                );
                setComplaints(data);
            } catch (error) {
                console.error("Error al cargar quejas", error);
            } finally {
                setLoading(false); // Terminamos de cargar
            }
        };

        fetchComplaints();
    }, []);

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

    const filtersApplied = folio || estadoQueja || fechaDesde || fechaHasta;

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
        setFilteredComplaints([]); // Restablecer a un array vacío hasta que se apliquen filtros
    };

    return {
        complaints,
        loading,
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        filteredComplaints,
        handleFilterChange,
        handleApplyFilters,
        formRef,
        handleClear,
        filtersApplied // Devuelve la función para aplicarla al hacer clic
    };
};
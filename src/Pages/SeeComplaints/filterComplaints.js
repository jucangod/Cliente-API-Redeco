import { useState, useEffect } from 'react';
import { getAllComplaints } from '../../Services/complains.service'; // Importa tu servicio

const useFilteredComplaints = () => {
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [formRef, setFormRef] = useState(null);
    const [complaints, setComplaints] = useState('');

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const { data } = await getAllComplaints();
                setComplaints(data);
                setFilteredComplaints(data);
            } catch (error) {
                console.error('Error al cargar quejas:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchComplaints();
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

            console.log("Fecha complaint: ", fechaComplaint);
            console.log("Fecha desde: ", fechaDesdeDate);
            console.log("Fecha hasta: ", fechaHastaDate);

            const fechaDesdeMatch = !fechaDesdeDate || fechaComplaint >= fechaDesdeDate;
            const fechaHastaMatch = !fechaHastaDate || fechaComplaint <= fechaHastaDate;

            return folioMatch && estadoMatch && fechaDesdeMatch && fechaHastaMatch;
        });
    
        setFilteredComplaints(filtered);
    };    

    const handleClear = () => {
        setFolio('');
        setEstadoQueja('');
        setFechaDesde('');
        setFechaHasta('');
        setFilteredComplaints(complaints); // Restablecer a la lista completa de quejas
        if (formRef?.current) {
            formRef.current.reset(); // Si usas un formulario con referencia, lo resetea
        }
    };    
    
    return {
        filteredComplaints,
        loading,
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
    };
};

export { useFilteredComplaints };
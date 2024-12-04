import { useState, useRef, useEffect } from 'react';
import { getAllComplains } from '../../Services/complains.service';

export const useFilteredComplaints = () => {
    const formRef = useRef(null);
    const [folio, setFolio] = useState('');
    const [estadoQueja, setEstadoQueja] = useState('');
    const [fechaDesde, setFechaDesde] = useState('');
    const [fechaHasta, setFechaHasta] = useState('');
    const [complaints, setComplaints] = useState([]);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const data = await getAllComplains();
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

    const filtersApplied = folio || estadoQueja || fechaDesde || fechaHasta;

    const handleApplyFilters = () => {
        const result = complaints.filter((complaint) => {
            const matchesFolio =
                !folio || (complaint.QuejasFolio && complaint.QuejasFolio.includes(folio));
            const matchesEstado =
                !estadoQueja || estadoQueja === '0' || complaint.QuejasEstatus.toString() === estadoQueja;
            const matchesFechaDesde =
                !fechaDesde ||
                (complaint.QuejasFecRecepcion &&
                    new Date(complaint.QuejasFecRecepcion) >= new Date(fechaDesde));
            const matchesFechaHasta =
                !fechaHasta ||
                (complaint.QuejasFecRecepcion &&
                    new Date(complaint.QuejasFecRecepcion) <= new Date(fechaHasta));
    
            return matchesFolio && matchesEstado && matchesFechaDesde && matchesFechaHasta;
        });
    
        setFilteredComplaints(result);
        console.log(filteredComplaints)
    };    

    const handleClear = () => {
        setFolio('');
        setEstadoQueja('');
        setFechaDesde('');
        setFechaHasta('');
        setFilteredComplaints(complaints);
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return {
        complaints,
        loading,
        filteredComplaints,
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        handleApplyFilters,
        handleClear,
        formRef,
        filtersApplied,
    };
};
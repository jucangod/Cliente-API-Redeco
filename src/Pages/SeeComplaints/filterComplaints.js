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
        const { data } = await getAllComplains();
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

  // Comentado porque aún no estamos aplicando los filtros
  // const filtersApplied = folio || estadoQueja || fechaDesde || fechaHasta;

  // const handleApplyFilters = () => {
  //     console.log('Aplicando filtros con los siguientes valores:', {
  //         folio,
  //         estadoQueja,
  //         fechaDesde,
  //         fechaHasta,
  //     });

  //     const result = complaints.filter((complaint) => {
  //         console.log('Analizando queja:', complaint);

  //         const matchesFolio = !folio || complaint.folio?.includes(folio);
  //         const matchesEstado =
  //             !estadoQueja || estadoQueja === '0' || complaint.estado === estadoQueja;
  //         const matchesFechaDesde =
  //             !fechaDesde || (complaint.fecha && new Date(complaint.fecha) >= new Date(fechaDesde));
  //         const matchesFechaHasta =
  //             !fechaHasta || (complaint.fecha && new Date(complaint.fecha) <= new Date(fechaHasta));

  //         return matchesFolio && matchesEstado && matchesFechaDesde && matchesFechaHasta;
  //     });

  //     console.log('Resultados filtrados:', result);
  //     setFilteredComplaints(result);
  // };

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
    // handleApplyFilters, // Comentado temporalmente
    handleClear,
    formRef,
    // filtersApplied, // Comentado porque depende de `handleApplyFilters`
  };
};

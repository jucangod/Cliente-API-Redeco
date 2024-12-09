import React from 'react';
import { CustomText } from '../../Components/Text';
import { ESTATUS_OPTIONS, MEDIOS, ESTADOS_DE_MEXICO } from '../CreateComplaints/dropdownOption';

// Función para crear un mapeo dinámico
const createMapping = (options) => {
    return options.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
    }, {});
};

// Crear mapeos de las opciones
const estatusMapping = createMapping(ESTATUS_OPTIONS);
const medioMapping = createMapping(MEDIOS);
const estadosMapping = createMapping(ESTADOS_DE_MEXICO);

// Hook personalizado para manejar datos y lógica de la tabla
const useTableComplaints = (filteredComplaints, handleDelete, loadingDelete) => {
    // Generar datos de la tabla
    const tableData = React.useMemo(() => {
        return filteredComplaints.map((complaint) => ({
            Folio: complaint.QuejasFolio,
            'Razón Social': complaint.QuejasDenominacion,
            Fecha: complaint.QuejasFecRecepcion,
            Medio: medioMapping[complaint.QuejasMedio] || 'Desconocido',
            Estatus: estatusMapping[complaint.QuejasEstatus] || 'Desconocido',
            Estado: estadosMapping[complaint.QuejasEstados] || 'Desconocido',
            Causa: complaint.QuejasCausa,
            Eliminar: (
                <button
                    onClick={() => handleDelete(complaint.QuejasFolio)}
                    className="delete-icon-button"
                    disabled={loadingDelete}
                    aria-label="Eliminar"
                >
                    {loadingDelete ? (
                        <span className="loading-spinner"></span>
                    ) : (
                        <i className="material-symbols-rounded">close</i>
                    )}
                </button>
            ),            
        }));
    }, [filteredComplaints, handleDelete, loadingDelete]);

    // Headers de la tabla
    const headers = React.useMemo(
        () => [
            'Folio',
            'Razón Social',
            'Fecha',
            'Medio',
            'Estatus',
            'Causa',
            'Estado',
            'Eliminar',
        ],
        []
    );

    // Mensaje de "No se encontraron datos"
    const noDataMessage = React.useMemo(() => {
        return filteredComplaints.length < 1 ? (
            <CustomText className="no-data-message">
                No se ha encontrado ninguna queja.
            </CustomText>
        ) : null;
    }, [filteredComplaints]);

    // Mensaje de "Cargando datos"
    const loadingMessage = React.useMemo(() => {
        return (
            <CustomText className="loading-message">Cargando quejas...</CustomText>
        );
    }, []);

    return { 
        tableData, 
        headers, 
        noDataMessage, 
        loadingMessage 
    };
};

export { useTableComplaints };
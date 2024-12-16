import React from 'react';
import { CustomText } from '../../Components/Text';
import { ESTATUS_OPTIONS, MEDIOS, ESTADOS_DE_MEXICO, NIVELES_AT, PORI_OPTIONS, TIPOS_PERSONA, RESPUESTA_OPTIONS, PENALIZACION_OPTIONS, MONTHS } from '../CreateComplaints/dropdownOption';

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
const nivelesAtMapping = createMapping(NIVELES_AT);
const poriMapping = createMapping(PORI_OPTIONS);
const tipoPersonaMapping = createMapping(TIPOS_PERSONA);
const respuestaMapping = createMapping(RESPUESTA_OPTIONS);
const penalizacionMapping = createMapping(PENALIZACION_OPTIONS);

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
            Sector: complaint.QuejasSector || 'N/A',
            NoMes: MONTHS[complaint.QuejasNoMes]?.label || 'N/A', // Mapeo de mes
            Num: complaint.QuejasNum || 'N/A',
            NivelAT: nivelesAtMapping[complaint.QuejasNivelAT] || 'N/A', // Mapeo de nivel AT
            Producto: complaint.QuejasProducto || 'N/A',
            Pori: poriMapping[complaint.QuejasPORI] || 'N/A', // Mapeo de Pori
            MunId: complaint.QuejasMunId || 'N/A',
            LocId: complaint.QuejasLocId || 'N/A',
            ColId: complaint.QuejasColId || 'N/A',
            CP: complaint.QuejasCP || 'N/A',
            TipoPersona: tipoPersonaMapping[complaint.QuejasTipoPersona] || 'N/A', // Mapeo de tipo persona
            Sexo: complaint.QuejasSexo || 'N/A',
            Edad: complaint.QuejasEdad || 'N/A',
            FecResolucion: complaint.QuejasFecResolucion || 'N/A',
            FecNotificacion: complaint.QuejasFecNotificacion || 'N/A',
            Respuesta: respuestaMapping[complaint.QuejasRespuesta] || 'N/A', // Mapeo de respuesta
            NumPenal: complaint.QuejasNumPenal || 'N/A',
            Penalizacion: penalizacionMapping[complaint.QuejasPenalizacion] || 'N/A', // Mapeo de penalización
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
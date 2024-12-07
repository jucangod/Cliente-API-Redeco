import React from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomButton } from '../../Components/Button';
import { CustomTable } from '../../Components/Table';
import { useFilteredComplaints } from './filterComplaints';
import { useDeleteComplaints } from './deleteComplaints'; // Importamos el hook personalizado
import { ESTATUS_OPTIONS, MEDIOS, ESTADOS_DE_MEXICO } from '../CreateComplaints/dropdownOption';
import './SeeComplaints.css';

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

function SeeComplaints() {
    const { handleDelete, loading: loadingDelete, error } = useDeleteComplaints(); // Usamos el hook
    const {
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
    } = useFilteredComplaints();

    // Mapeo de datos para que coincidan con los headers originales y traducir valores numéricos
    const tableData = filteredComplaints.map((complaint) => ({
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
                className="delete-button"
                disabled={loadingDelete}
            >
                {loadingDelete ? 'Eliminando...' : 'Eliminar'}
            </button>
        ),
    }));

    const headers = [
        'Folio',
        'Razón Social',
        'Fecha',
        'Medio',
        'Estatus',
        'Causa',
        'Estado',
        'Eliminar',
    ];

    const noDataMessage =
        !loading && filteredComplaints.length < 1 ? (
            <CustomText className="no-data-message">
                No se ha encontrado ninguna queja.
            </CustomText>
        ) : null;

    const loadingMessage = loading ? (
        <CustomText className="loading-message">Cargando quejas...</CustomText>
    ) : null;

    return (
        <div className="complaints-container">
            <div className="filters-section">
                <CustomText id="filters-title" className="section-title">
                    Filtros de Búsqueda
                </CustomText>
                <form ref={formRef} className="filters-group">
                    <CustomText className="form-text">Número de folio</CustomText>
                    <CustomText className="form-text">Estado de la queja</CustomText>
                    <CustomInput
                        id="folio"
                        placeholder="Número de folio"
                        value={folio}
                        onChange={(e) => setFolio(e.target.value)}
                        className="filter-input"
                    />
                    <CustomDropdown
                        id="estadoQueja"
                        options={ESTATUS_OPTIONS}
                        value={estadoQueja}
                        onChange={(value) => setEstadoQueja(value)}
                        className="filter-dropdown"
                    />
                    <CustomText className="form-text">Desde (fecha)</CustomText>
                    <CustomText className="form-text">Hasta (fecha)</CustomText>
                    <CustomInput
                        id="fechaDesde"
                        placeholder="Desde (Fecha)"
                        type="date"
                        value={fechaDesde}
                        onChange={(e) => setFechaDesde(e.target.value)}
                        className="filter-input"
                    />
                    <CustomInput
                        id="fechaHasta"
                        placeholder="Hasta (Fecha)"
                        type="date"
                        value={fechaHasta}
                        onChange={(e) => setFechaHasta(e.target.value)}
                        className="filter-input"
                    />
                    <div id="filter-buttons-section">
                        <CustomButton
                            className="apply-filters-button"
                            type="button"
                            onClick={handleApplyFilters}
                        >
                            Aplicar Filtros
                        </CustomButton>
                        <CustomButton
                            className="clear-button"
                            type="button"
                            onClick={handleClear}
                        >
                            Limpiar campos
                        </CustomButton>
                    </div>
                </form>
            </div>

            <div className="table-section">
                <CustomText id="complaints-table-title" className="section-title">
                    Quejas Registradas
                </CustomText>
                {loadingMessage}
                {noDataMessage}
                {!loading && filteredComplaints.length > 0 && (
                    <CustomTable headers={headers} data={tableData} />
                )}
                {error && (
                    <CustomText className="error-message" style={{ color: 'red' }}>
                        {error}
                    </CustomText>
                )}
            </div>
        </div>
    );
}

export { SeeComplaints };
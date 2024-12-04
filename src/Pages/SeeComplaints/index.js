import React from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomButton } from '../../Components/Button';
import { CustomTable } from '../../Components/Table';
import { useFilteredComplaints } from './filterComplaints';
import { ESTATUS_OPTIONS } from './dropdownOption';
import './SeeComplaints.css';

function SeeComplaints() {
    const {
        complaints,
        filteredComplaints,
        loading,
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        handleApplyFilters,
        handleClear,
        formRef,
        filtersApplied,
    } = useFilteredComplaints();

    // Mapeo de datos para que coincidan con los headers de la tabla
    const tableData = filteredComplaints.map((complaint) => ({
        Folio: complaint.QuejasFolio,
        'Razón Social': complaint.QuejasDenominacion,
        Fecha: complaint.QuejasFecRecepcion,
        Medio: complaint.QuejasMedio,
        Estado: complaint.QuejasEstados,
        Causa: complaint.QuejasCausa,
        Entidad: complaint.QuejasMunId,
    }));

    const noDataMessage =
        !loading && filtersApplied && filteredComplaints.length === 0 ? (
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
                    <CustomInput
                        id="folio"
                        placeholder="Número de folio"
                        onChange={(e) => setFolio(e.target.value)}
                        className="filter-input"
                    />
                    <CustomText className="form-text">Estado de la queja</CustomText>
                    <CustomDropdown
                        id="estadoQueja"
                        options={ESTATUS_OPTIONS}
                        onChange={(value) => setEstadoQueja(value)}
                        className="filter-dropdown"
                    />
                    <CustomText className="form-text">Desde (fecha)</CustomText>
                    <CustomInput
                        id="fechaDesde"
                        placeholder="Desde (Fecha)"
                        type="date"
                        onChange={(e) => setFechaDesde(e.target.value)}
                        className="filter-input"
                    />
                    <CustomText className="form-text">Hasta (fecha)</CustomText>
                    <CustomInput
                        id="fechaHasta"
                        placeholder="Hasta (Fecha)"
                        type="date"
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
                {!loading && (tableData.length > 0 || !filtersApplied) && (
                    <CustomTable
                        headers={[
                            'Folio',
                            'Razón Social',
                            'Fecha',
                            'Medio',
                            'Estado',
                            'Causa',
                            'Entidad',
                        ]}
                        data={tableData}
                    />
                )}
            </div>
        </div>
    );
}

export { SeeComplaints };
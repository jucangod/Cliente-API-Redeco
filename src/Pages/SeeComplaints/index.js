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
        filtersApplied
    } = useFilteredComplaints();

    // Función para reiniciar el formulario
    const handleFormClear = () => {
        if (formRef.current) {
            formRef.current.reset(); // Resetea los inputs del formulario
        }
        handleClear(); // Limpia el estado del formulario
    };

    // Mostrar un mensaje si no hay quejas o si no coinciden los filtros
    const noDataMessage = filteredComplaints.length === 0 && !loading && filtersApplied ? (
        <CustomText className="no-data-message">No se ha encontrado ninguna queja.</CustomText>
    ) : null;

    // Mostrar mensaje de carga si aún estamos esperando los datos
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
                        onChange={e => setFolio(e.target.value)} // Actualiza el estado del folio directamente
                        className="filter-input"
                    />
                    <CustomDropdown
                        id="estadoQueja"
                        options={ESTATUS_OPTIONS}
                        onChange={(value) => setEstadoQueja(value)} // Actualiza el estado directamente
                        className="filter-dropdown"
                    />
                    <CustomText className="form-text">Desde (fecha)</CustomText>
                    <CustomText className="form-text">Hasta (fecha)</CustomText>
                    <CustomInput
                        id="fechaDesde"
                        placeholder="Desde (Fecha)"
                        type="date"
                        onChange={(e) => setFechaDesde(e.target.value)} // Actualiza el estado directamente
                        className="filter-input"
                    />
                    <CustomInput
                        id="fechaHasta"
                        placeholder="Hasta (Fecha)"
                        type="date"
                        onChange={(e) => setFechaHasta(e.target.value)} // Actualiza el estado directamente
                        className="filter-input"
                    />
                    <div id='filter-buttons-section'>
                        <CustomButton
                            className="apply-filters-button"
                            type='button'
                            onClick={handleApplyFilters} // Filtra solo al hacer clic
                        >
                            Aplicar Filtros
                        </CustomButton>
                        <CustomButton
                            className="clear-button"
                            type='button'
                            onClick={handleFormClear} // Filtra solo al hacer clic
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
                
                {/* Mostrar la tabla solo si hay datos filtrados o si los filtros no se han aplicado aún */}
                {!loading && (filteredComplaints.length > 0 || !filtersApplied) && (
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
                        data={filteredComplaints}
                    />
                )}
            </div>
        </div>
    );
}

export { SeeComplaints };
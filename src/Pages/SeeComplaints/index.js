import React from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomButton } from '../../Components/Button';
import { CustomTable } from '../../Components/Table';
import { CustomModal } from '../../Components/Modal';
import { useFilteredComplaints } from './filterComplaints';
import { useDeleteComplaints } from './deleteComplaints';
import { useTableComplaints } from './tableComplaints';
import { ESTATUS_OPTIONS } from '../CreateComplaints/dropdownOption';
import './SeeComplaints.css';

function SeeComplaints() {
    const {
        handleDelete,
        confirmDelete,
        cancelDelete,
        loadingDelete,
        errorDelete,
        isModalOpen,
        isSuccess,
        closeModal,
        successMessage
    } = useDeleteComplaints();

    const {
        filteredComplaints,
        loading,  // Estado de carga
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

    // Usar el hook personalizado para la tabla
    const { tableData, headers, noDataMessage, loadingMessage } = useTableComplaints(
        filteredComplaints,
        handleDelete,
        loadingDelete
    );

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

            <CustomModal
                isOpen={isModalOpen}
                title="Confirmación de Eliminación"
                message="¿Estás seguro de que deseas eliminar esta queja?"
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            <CustomModal
                isOpen={isSuccess} // Mostrar modal solo si isSuccess es true
                message={successMessage} // Pasamos el mensaje con el folio eliminado
                onClose={closeModal} // Llamamos a handleCloseModal en lugar de closeModal directamente
                isSuccess={true} // Solo muestra el botón de "Cerrar"
            />

            <div className="table-section">
                <CustomText className="section-title">
                    Listado de Quejas
                </CustomText>

                {loading ? (
                    <CustomText className="loading-message">Cargando quejas...</CustomText>
                ) : (
                    <>
                        {loadingDelete && loadingMessage}
                        {!loadingDelete && noDataMessage}
                        {!loadingDelete && filteredComplaints.length > 0 && (
                            <CustomTable headers={headers} data={tableData} />
                        )}
                        {errorDelete && (
                            <CustomText className='error-text'>Error: {errorDelete}</CustomText>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export { SeeComplaints };
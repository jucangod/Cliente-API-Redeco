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
import { jsPDF } from 'jspdf'; // Importar jsPDF
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

    // Función para generar PDF de la queja
    const handlePreviewPDF = (complaint) => {
        console.log('Complaint data:', complaint); // Verificar los datos
        const doc = new jsPDF();
    
        // Asegúrate de usar los nombres correctos de las propiedades
        doc.text(`Folio: ${complaint.Folio || 'N/A'}`, 10, 10);
        doc.text(`Razón Social: ${complaint['Razón Social'] || 'N/A'}`, 10, 20);
        doc.text(`Fecha: ${complaint.Fecha || 'N/A'}`, 10, 30);
        doc.text(`Medio: ${complaint.Medio || 'N/A'}`, 10, 40);
        doc.text(`Estatus: ${complaint.Estatus || 'N/A'}`, 10, 50);
        doc.text(`Estado: ${complaint.Estado || 'N/A'}`, 10, 60);
        doc.text(`Causa: ${complaint.Causa || 'N/A'}`, 10, 70);
        doc.text(`Sector: ${complaint.Sector || 'N/A'}`, 10, 80);
        doc.text(`Número de mes: ${complaint.NoMes || 'N/A'}`, 10, 90);
        doc.text(`Número: ${complaint.Num || 'N/A'}`, 10, 100);
        doc.text(`Nivel AT: ${complaint.NivelAT || 'N/A'}`, 10, 110);
        doc.text(`Producto: ${complaint.Producto || 'N/A'}`, 10, 120);
        doc.text(`PORI: ${complaint.PORI || 'N/A'}`, 10, 130);
        doc.text(`Municipio ID: ${complaint.MunId || 'N/A'}`, 10, 140);
        doc.text(`Localidad ID: ${complaint.LocId || 'N/A'}`, 10, 150);
        doc.text(`Colonia ID: ${complaint.ColId || 'N/A'}`, 10, 160);
        doc.text(`Código Postal: ${complaint.CP || 'N/A'}`, 10, 170);
        doc.text(`Tipo Persona: ${complaint.TipoPersona || 'N/A'}`, 10, 180);
        doc.text(`Sexo: ${complaint.Sexo || 'N/A'}`, 10, 190);
        doc.text(`Edad: ${complaint.Edad || 'N/A'}`, 10, 200);
        doc.text(`Fecha Resolución: ${complaint.FecResolucion || 'N/A'}`, 10, 210);
        doc.text(`Fecha Notificación: ${complaint.FecNotificacion || 'N/A'}`, 10, 220);
        doc.text(`Respuesta: ${complaint.Respuesta || 'N/A'}`, 10, 230);
        doc.text(`Número Penal: ${complaint.NumPenal || 'N/A'}`, 10, 240);
        doc.text(`Penalización: ${complaint.Penalizacion || 'N/A'}`, 10, 250);
    
        // Guardar el PDF con el nombre del folio
        doc.save(`Queja_${complaint.Folio || 'Unknown'}.pdf`);
    };
    
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
                            <CustomTable 
                                headers={headers} 
                                data={tableData.map(complaint => ({
                                    ...complaint,
                                    Folio: (
                                        <button 
                                            onClick={() => handlePreviewPDF(complaint)}
                                            className="preview-pdf-button"
                                        >
                                            {complaint.Folio}
                                        </button>
                                    ),
                                }))} 
                            />
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
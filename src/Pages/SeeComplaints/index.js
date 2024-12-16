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


    // Función para generar PDF de la queja con estilos
    const handlePreviewPDF = (complaint) => {
        console.log('Complaint data:', complaint); // Verificar los datos
        const doc = new jsPDF();

        // Configuración de estilos generales
        const primaryColor = [97, 18, 50]; // Rojo oscuro
        const secondaryColor = [165, 127, 44]; // Dorado
        const fontRegular = 'Helvetica';
        const fontBold = 'Helvetica';

        // Título del documento
        doc.setFont(fontBold, 'bold');
        doc.setFontSize(16);
        doc.setTextColor(...primaryColor);
        doc.text('Reporte de Queja', doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

        // Línea separadora
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(0.5);
        doc.line(10, 15, doc.internal.pageSize.getWidth() - 10, 15);

        // Configuración de estilo para campos
        doc.setFont(fontRegular, 'normal');
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0); // Negro para texto general

        // Configuración de estilo para etiquetas
        const labelStyle = () => {
            doc.setFont(fontBold, 'bold');
            doc.setTextColor(...secondaryColor);
        };

        const valueStyle = () => {
            doc.setFont(fontRegular, 'normal');
            doc.setTextColor(0, 0, 0);
        };

        // Datos de la queja
        let cursorY = 20;
        const marginX = 10;
        const lineSpacing = 8;

        const fields = [
            { label: 'Folio', value: complaint.Folio },
            { label: 'Razón Social', value: complaint['Razón Social'] },
            { label: 'Fecha', value: complaint.Fecha },
            { label: 'Medio', value: complaint.Medio },
            { label: 'Estatus', value: complaint.Estatus },
            { label: 'Estado', value: complaint.Estado },
            { label: 'Causa', value: complaint.Causa },
            { label: 'Sector', value: complaint.Sector },
            { label: 'Número de mes', value: complaint.NoMes },
            { label: 'Número', value: complaint.Num },
            { label: 'Nivel AT', value: complaint.NivelAT },
            { label: 'Producto', value: complaint.Producto },
            { label: 'PORI', value: complaint.PORI },
            { label: 'Municipio ID', value: complaint.MunId },
            { label: 'Localidad ID', value: complaint.LocId },
            { label: 'Colonia ID', value: complaint.ColId },
            { label: 'Código Postal', value: complaint.CP },
            { label: 'Tipo Persona', value: complaint.TipoPersona },
            { label: 'Sexo', value: complaint.Sexo },
            { label: 'Edad', value: complaint.Edad },
            { label: 'Fecha Resolución', value: complaint.FecResolucion },
            { label: 'Fecha Notificación', value: complaint.FecNotificacion },
            { label: 'Respuesta', value: complaint.Respuesta },
            { label: 'Número Penal', value: complaint.NumPenal },
            { label: 'Penalización', value: complaint.Penalizacion },
        ];

        fields.forEach((field) => {
            labelStyle();
            doc.text(`${field.label}:`, marginX, cursorY);
            valueStyle();
            // Convertir el valor a string para evitar errores
            doc.text(String(field.value || 'N/A'), marginX + 50, cursorY);
            cursorY += lineSpacing;
        });

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
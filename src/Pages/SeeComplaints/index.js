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
    const complaints = [
        {
            folio: '123',
            razonSocial: 'Empresa A',
            fecha: '2024-11-01',
            medio: 'Teléfono',
            estado: 'Pendiente',
            causa: 'Mala atención',
            entidad: 'Entidad 1',
        },
        {
            folio: '124',
            razonSocial: 'Empresa B',
            fecha: '2024-10-02',
            medio: 'Correo electrónico',
            estado: 'Concluido',
            causa: 'Producto defectuoso',
            entidad: 'Entidad 2',
        },
    ];

    const {
        filteredComplaints,
        setFolio,
        setEstadoQueja,
        setFechaDesde,
        setFechaHasta,
        handleApplyFilters,
        handleClear,
        formRef
    } = useFilteredComplaints(complaints);

    // Función para reiniciar el formulario
    const handleFormClear = () => {
        if (formRef.current) {
            formRef.current.reset(); // Resetea los inputs del formulario
        }
        handleClear(); // Limpia el estado del formulario
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
                    data={filteredComplaints.length > 0 ? filteredComplaints : complaints}
                />
            </div>
        </div>
    );
}

export { SeeComplaints };
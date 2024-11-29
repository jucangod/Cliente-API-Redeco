import React, { useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomButton } from '../../Components/Button';
import { CustomTable } from '../../Components/Table';  // Importamos el nuevo CustomTable
import './SeeComplaints.css';

function SeeComplaints() {
    const [filters, setFilters] = useState({
        folio: '',
        estadoQueja: '',
        fechaDesde: '',
        fechaHasta: '',
    });

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [id]: value,
        }));
    };

    // Aquí irían las quejas filtradas, simuladas con un array de ejemplo
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
            fecha: '2024-11-02',
            medio: 'Correo electrónico',
            estado: 'Concluido',
            causa: 'Producto defectuoso',
            entidad: 'Entidad 2',
        },
    ];

    return (
        <div className="complaints-container">
            <div className="filters-section">
                <CustomText id="filters-title" className="section-title">
                    Filtros de Búsqueda
                </CustomText>
                <div className="filters-group">
                    <CustomInput
                        id="folio"
                        placeholder="Número de folio"
                        value={filters.folio}
                        onChange={handleFilterChange}
                        className="filter-input"
                    />
                    <CustomDropdown
                        id="estadoQueja"
                        options={[
                            { label: 'Pendiente', value: 'Pendiente' },
                            { label: 'Concluido', value: 'Concluido' },
                        ]}
                        value={filters.estadoQueja}
                        onChange={handleFilterChange}
                        className="filter-dropdown"
                    />
                    <CustomInput
                        id="fechaDesde"
                        placeholder="Desde (Fecha)"
                        type="date"
                        value={filters.fechaDesde}
                        onChange={handleFilterChange}
                        className="filter-input"
                    />
                    <CustomInput
                        id="fechaHasta"
                        placeholder="Hasta (Fecha)"
                        type="date"
                        value={filters.fechaHasta}
                        onChange={handleFilterChange}
                        className="filter-input"
                    />
                    <CustomButton className="apply-filters-button">Aplicar Filtros</CustomButton>
                </div>
            </div>

            <div className="table-section">
                <CustomText id="complaints-table-title" className="section-title">
                    Quejas Registradas
                </CustomText>
                <CustomTable
                    headers={['Folio', 'Razón Social', 'Fecha', 'Medio', 'Estado', 'Causa', 'Entidad']}
                    data={complaints}
                />
            </div>
        </div>
    );
}

export { SeeComplaints };
import React from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomRadioButton } from '../../Components/RadioButton';
import { CustomButton } from '../../Components/Button';
import './CreateComplaints.css';
import { useChooseOptions } from './chooseOption';
import { 
  MONTHS, MEDIOS, NIVELES_AT, PORI_OPTIONS, ESTATUS_OPTIONS, 
  TIPOS_PERSONA, RESPUESTA_OPTIONS, PENALIZACION_OPTIONS, ESTADOS_DE_MEXICO, MUNICIPIOS 
} from './dropdownOption';

function CreateComplaints() {
    const {
        folio, setFolio,
        setMes,
        setDenominacion,
        setSector,
        setFecRecepcion,
        setMedio,
        setNivelAT,
        setProducto,
        setCausa,
        setPORI,
        setEstatus,
        setEstado,
        setMunicipio,
        setColonia,
        setCP,
        setLocalidad,
        setTipoPersona,
        setEdad,
        sexo, setSexo,
        setFecResolucion,
        setFecNotificacion,
        setRespuesta,
        setNumPenal,
        setPenalizacion,
        handleClear,
        formRef
    } = useChooseOptions();

    // Función para reiniciar el formulario
    const handleFormClear = () => {
        if (formRef.current) {
            formRef.current.reset(); // Resetea los inputs del formulario
        }
        handleClear(); // Limpia el estado del formulario
    };

    return (
        <div className="complaints-container">
            <form ref={formRef} className="complaints-form">
                <CustomText id="general-info-title" className="form-section-title">
                    Información General
                </CustomText>
                <div className="form-group">
                    <CustomInput
                        id="QuejasFolio"
                        placeholder="Número de folio"
                        className="form-input"
                        value={folio}
                        onChange={(e) => setFolio(e.target.value)}
                    />
                    <CustomDropdown
                        id="QuejasNoMes"
                        options={MONTHS}
                        className="form-dropdown"
                        onChange={(value) => setMes(value)}
                    />
                    <CustomInput
                        id="QuejasDenominacion"
                        placeholder="Denominación o razón social"
                        className="form-input"
                        onChange={(e) => setDenominacion(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasSector"
                        placeholder="Sector al que pertenece la IF"
                        className="form-input"
                        onChange={(e) => setSector(e.target.value)}
                    />
                </div>

                <CustomText id="complaint-data-title" className="form-section-title">
                    Datos de la Queja
                </CustomText>
                <div className="form-group">
                    <CustomInput
                        id="QuejasFecRecepcion"
                        placeholder="Fecha de la queja"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecRecepcion(e.target.value)}
                    />
                    <CustomDropdown
                        id="QuejasMedio"
                        options={MEDIOS}
                        className="form-dropdown"
                        onChange={(value) => setMedio(value)}
                    />
                    <CustomDropdown
                        id="QuejasNivelAT"
                        options={NIVELES_AT}
                        className="form-dropdown"
                        onChange={(value) => setNivelAT(value)}
                    />
                    <CustomInput
                        id="QuejasProducto"
                        placeholder="Producto y/o servicio"
                        className="form-input"
                        onChange={(e) => setProducto(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasCausa"
                        placeholder="Causa de la queja"
                        className="form-input"
                        onChange={(e) => setCausa(e.target.value)}
                    />
                    <CustomDropdown
                        id="QuejasPORI"
                        options={PORI_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setPORI(value)}
                    />
                    <CustomDropdown
                        id="QuejasEstatus"
                        options={ESTATUS_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setEstatus(value)}
                    />
                </div>

                <CustomText id="location-title" className="form-section-title">
                    Ubicación
                </CustomText>
                <div className="form-group">
                    <CustomDropdown
                        id="QuejasEstados"
                        options={ESTADOS_DE_MEXICO}
                        className="form-dropdown"
                        onChange={(value) => setEstado(value)}
                    />
                    <CustomDropdown
                        id="QuejasMunId"
                        options={MUNICIPIOS}
                        className="form-dropdown"
                        onChange={(value) => setMunicipio(value)}
                    />
                    <CustomInput
                        id="QuejasColId"
                        placeholder="Colonia"
                        className="form-input"
                        onChange={(e) => setColonia(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasCP"
                        placeholder="Código Postal"
                        className="form-input"
                        onChange={(e) => setCP(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasLocId"
                        placeholder="Localidad"
                        className="form-input"
                        onChange={(e) => setLocalidad(e.target.value)}
                    />
                </div>

                <CustomText id="user-data-title" className="form-section-title">
                    Datos del Usuario
                </CustomText>
                <div className="form-group">
                    <CustomDropdown
                        id="QuejasTipoPersona"
                        options={TIPOS_PERSONA}
                        className="form-dropdown"
                        onChange={(value) => setTipoPersona(value)}
                    />
                    <CustomInput
                        id="QuejasEdad"
                        placeholder="Edad"
                        type="number"
                        className="form-input"
                        onChange={(e) => setEdad(e.target.value)}
                    />
                    <CustomText className="form-section-subtitle">
                        Género:
                    </CustomText>
                    <div className="radio-group">
                        <CustomRadioButton
                            id="QuejasSexoH"
                            label="Hombre"
                            value="H"
                            name="sexo"
                            checked={sexo === 'H'}
                            onChange={() => setSexo('H')}
                        />
                        <CustomRadioButton
                            id="QuejasSexoM"
                            label="Mujer"
                            value="M"
                            name="sexo"
                            checked={sexo === 'M'}
                            onChange={() => setSexo('M')}
                        />
                        <CustomRadioButton
                            id="QuejasSexoU"
                            label="Sin especificar"
                            value="U"
                            name="sexo"
                            checked={sexo === 'U'}
                            onChange={() => setSexo('U')}
                        />
                    </div>
                </div>

                <CustomText id="response-data-title" className="form-section-title">
                    Datos de Respuesta
                </CustomText>
                <div className="form-group">
                    <CustomInput
                        id="QuejasFecResolucion"
                        placeholder="Fecha de resolución"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecResolucion(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasFecNotificacion"
                        placeholder="Fecha de notificación"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecNotificacion(e.target.value)}
                    />
                    <CustomDropdown
                        id="QuejasRespuesta"
                        options={RESPUESTA_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setRespuesta(value)}
                    />
                    <CustomInput
                        id="QuejasNumPenal"
                        placeholder="Número de penalización"
                        className="form-input"
                        onChange={(e) => setNumPenal(e.target.value)}
                    />
                    <CustomDropdown
                        id="QuejasPenalizacion"
                        options={PENALIZACION_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setPenalizacion(value)}
                    />
                </div>

                <div className="form-actions">
                    <CustomButton
                        type="submit"
                        className="submit-button"
                    >
                        Guardar
                    </CustomButton>
                    <CustomButton
                        type="button"
                        className="clear-button"
                        onClick={handleFormClear}
                    >
                        Limpiar
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export { CreateComplaints };
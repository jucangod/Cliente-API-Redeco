import React, { useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomRadioButton } from '../../Components/RadioButton';
import { CustomButton } from '../../Components/Button';
import { useChooseOptions } from './formManipulation';
import { ChangeUserView } from '../../Services/ChangeUserView';
import { 
  MONTHS, MEDIOS, NIVELES_AT, PORI_OPTIONS, ESTATUS_OPTIONS, 
  TIPOS_PERSONA, RESPUESTA_OPTIONS, PENALIZACION_OPTIONS, ESTADOS_DE_MEXICO, MUNICIPIOS 
} from './dropdownOption';
import './CreateComplaints.css';

function CreateComplaints() {
    const {
        setFolio, setMes, setDenominacion, setSector, setFecRecepcion,
        setMedio, setNivelAT, setProducto, setCausa, setPORI, setEstatus,
        setEstado, setMunicipio, setColonia, setCP, setLocalidad,
        setTipoPersona, setEdad, sexo, setSexo,
        setFecResolucion, setFecNotificacion, setRespuesta, setNumPenal,
        setPenalizacion, setNum, handleClear, formRef
    } = useChooseOptions();

    return (
        <div className="complaints-container">
            <form ref={formRef} className="complaints-form">
                <CustomText id="general-info-title" className="form-section-title">
                    Información General
                </CustomText>
                <div className="form-group">
                    
                <CustomText className="form-text">Denominación o razón social</CustomText>
                    <CustomText className="form-text">Sector al que pertenece la IF</CustomText>
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
                    <CustomText className="form-text">Mes a informar</CustomText>
                    <CustomText className="form-text">Número de quejas</CustomText>
                    <CustomDropdown
                        id="QuejasNoMes"
                        options={MONTHS}
                        className="form-dropdown"
                        onChange={(value) => setMes(value)}
                    />
                    <CustomInput
                        id="QuejasNum"
                        placeholder="Número de quejas"
                        className="form-input"
                        onChange={(e) => setNum(e.target.value)}
                    />
                    <CustomText className="form-text" id="text-alone">Número de folio</CustomText>
                    <CustomInput
                        id="QuejasFolio"
                        placeholder="Número de folio"
                        className="form-input"
                        onChange={(e) => setFolio(e.target.value)}
                    />
                </div>

                <CustomText id="complaint-data-title" className="form-section-title">
                    Datos de la Queja
                </CustomText>
                <div className="form-group">
                    <CustomText className="form-text">Fecha de la queja</CustomText>
                    <CustomText className="form-text">Medio de recepción o canal</CustomText>
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
                    <CustomText className="form-text">Nivel de atención o contacto</CustomText>
                    <CustomText className="form-text">Producto y/o servicio</CustomText>
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
                        required
                    />
                    <CustomText className="form-text">Causa de la queja</CustomText>
                    <CustomText className="form-text">PORI</CustomText>
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
                    <CustomText className="form-text" id="text-alone">Estado</CustomText>
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
                    <CustomText className="form-text">Entidad Federativa</CustomText>
                    <CustomText className="form-text">Municipio</CustomText>
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
                    <CustomText className="form-text">Localidad</CustomText>
                    <CustomText className="form-text">Colonia</CustomText>
                    <CustomInput
                        id="QuejasLocId"
                        placeholder="Localidad"
                        className="form-input"
                        onChange={(e) => setLocalidad(e.target.value)}
                    />
                    <CustomInput
                        id="QuejasColId"
                        placeholder="Colonia"
                        className="form-input"
                        onChange={(e) => setColonia(e.target.value)}
                    />
                    <CustomText className="form-text" id="text-alone">Código Postal</CustomText>
                    <CustomInput
                        id="QuejasCP"
                        placeholder="Código Postal"
                        className="form-input"
                        onChange={(e) => setCP(e.target.value)}
                        maxLength={10}
                    />
                </div>

                <CustomText id="user-data-title" className="form-section-title">
                    Datos del Usuario
                </CustomText>
                <div className="form-group">
                    <CustomText className="form-text">Tipo de Persona</CustomText>
                    <CustomText className="form-text">Edad</CustomText>
                    <CustomDropdown
                        id="QuejasTipoPersona"
                        options={TIPOS_PERSONA}
                        className="form-dropdown"
                        onChange={(value) => setTipoPersona(value)}
                    />
                    <CustomInput
                        id="QuejasEdad"
                        placeholder="Edad"
                        type="text"
                        className="form-input"
                        onChange={(e) => setEdad(e.target.value)}
                    />
                    <CustomText className="form-section-subtitle">
                        Género
                    </CustomText>
                    <div className="radio-group">
                        <CustomText htmlFor="QuejasSexoH">Hombre</CustomText>
                        <CustomRadioButton
                            id="QuejasSexoH"
                            value="H"
                            name="sexo"
                            checked={sexo === 'H'}
                            onChange={() => setSexo('H')}
                        />
                        <CustomText htmlFor="QuejasSexoM">Mujer</CustomText>
                        <CustomRadioButton
                            id="QuejasSexoM"
                            value="M"
                            name="sexo"
                            checked={sexo === 'M'}
                            onChange={() => setSexo('M')}
                        />
                        <CustomText htmlFor="QuejasSexoU">Sin especificar</CustomText>
                        <CustomRadioButton
                            id="QuejasSexoU"
                            value="U"
                            name="sexo"
                            checked={sexo === 'U'}
                            onChange={() => setSexo('U')}
                        />
                    </div>
                </div>

                <CustomText id="response-data-title" className="form-section-title">
                    Resolución de la queja
                </CustomText>
                <div className="form-group">
                    <CustomText className="form-text">Fecha de resolucion</CustomText>
                    <CustomText className="form-text">Fecha de notificación</CustomText>
                    <CustomInput
                        id="QuejasFecResolucion"
                        placeholder="Fecha de resolución"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecResolucion(e.target.value)}
                    >
                    </CustomInput>
                    <CustomInput
                        id="QuejasFecNotificacion"
                        placeholder="Fecha de notificación"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecNotificacion(e.target.value)}
                    />
                    <CustomText className="form-text">Sentido de resolución</CustomText>
                    <CustomText className="form-text">Número de Penalización</CustomText>
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
                        maxLength={4}
                    />
                    <CustomText className="form-text" id="text-alone">Tipo de penalización</CustomText>
                    <CustomDropdown
                        id="QuejasPenalizacion"
                        options={PENALIZACION_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setPenalizacion(value)}
                    />
                </div>

                <div className="form-actions">
                    <CustomButton type="submit" className='submit-button'>Enviar</CustomButton>
                    <CustomButton type="button" className='clear-button'>Limpiar</CustomButton>
                </div>
            </form>
        </div>
    );
}

export { CreateComplaints };
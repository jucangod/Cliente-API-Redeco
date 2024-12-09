import React, { useState } from 'react';
import { CustomText } from '../../Components/Text';
import { CustomInput } from '../../Components/Input';
import { CustomDropdown } from '../../Components/Dropdown';
import { CustomRadioButton } from '../../Components/RadioButton';
import { CustomButton } from '../../Components/Button';
import { useChooseOptions } from './formManipulation';
import { 
  MONTHS, MEDIOS, NIVELES_AT, PORI_OPTIONS, ESTATUS_OPTIONS, 
  TIPOS_PERSONA, RESPUESTA_OPTIONS, PENALIZACION_OPTIONS, ESTADOS_DE_MEXICO, MUNICIPIOS 
} from './dropdownOption';
import { CustomModal } from '../../Components/Modal'
import './CreateComplaints.css';

function CreateComplaints() {

    const {
        setFolio, folio,
        setMes, mes,
        setDenominacion, denominacion,
        setSector, sector,
        setFecRecepcion, fecRecepcion,
        setMedio, medio,
        setNivelAT, nivelAT,
        setProducto, producto,
        setCausa, causa,
        setPORI, PORI,
        setEstatus, estatus,
        setEstado, estado,
        setMunicipio, municipio,
        setColonia, colonia,
        setCP, cp,
        setLocalidad, localidad,
        setTipoPersona, tipoPersona,
        setEdad, edad,
        sexo, setSexo,
        setFecResolucion, fecResolucion,
        setFecNotificacion, fecNotificacion,
        setRespuesta, respuesta,
        setNumPenal,numPenal,
        setPenalizacion, penalizacion,
        setNum, num,
        formRef,
        handleClear,
        saveComplaint,
        loadingSave,
        success,
        successMessage,
        errorSave,
        closeModal,
        errors, setErrors
    } = useChooseOptions();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        await saveComplaint(); // Llamar a la función que maneja la validación y el guardado
    };

    return (
        <div className="complaints-container">
            <form ref={formRef} className="complaints-form" onSubmit={handleSubmit}>
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
                        value={denominacion}
                    />
                    <CustomInput
                        id="QuejasSector"
                        placeholder="Sector al que pertenece la IF"
                        className="form-input"
                        onChange={(e) => setSector(e.target.value)}
                        value={sector}
                    />
                    {errors.QuejasDenominacion && <CustomText className="form-text-error">{errors.QuejasDenominacion}</CustomText>}
                    {errors.QuejasSector && <CustomText className="form-text-error">{errors.QuejasSector}</CustomText>}
                    <CustomText className="form-text">Mes a informar</CustomText>
                    <CustomText className="form-text">Número de quejas</CustomText>
                    <CustomDropdown
                        id="QuejasNoMes"
                        options={MONTHS}
                        className="form-dropdown"
                        onChange={(value) => setMes(value)}
                        value={mes}
                    />
                    <CustomInput
                        id="QuejasNum"
                        placeholder="Número de quejas"
                        className="form-input"
                        onChange={(e) => setNum(e.target.value)}
                        value={num}
                    />
                    {errors.QuejasNoMes && <CustomText className="form-text-error">{errors.QuejasNoMes}</CustomText>}
                    {errors.QuejasNum && <CustomText className="form-text-error">{errors.QuejasNum}</CustomText>}
                    <CustomText className="form-text" id="text-alone">Número de folio</CustomText>
                    <CustomInput
                        id="QuejasFolio"
                        placeholder="Número de folio"
                        className="form-input"
                        onChange={(e) => setFolio(e.target.value)}
                        value={folio}
                    />
                    {errors.QuejasFolio && <CustomText className="form-text-error" id="text-alone">{errors.QuejasFolio}</CustomText>}
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
                        value={fecRecepcion}
                    />
                    <CustomDropdown
                        id="QuejasMedio"
                        options={MEDIOS}
                        className="form-dropdown"
                        onChange={(value) => setMedio(value)}
                        value={medio}
                    />
                    {errors.QuejasFecRecepcion && <CustomText className="form-text-error">{errors.QuejasFecRecepcion}</CustomText>}
                    {errors.QuejasMedio && <CustomText className="form-text-error">{errors.QuejasMedio}</CustomText>}
                    <CustomText className="form-text">Nivel de atención o contacto</CustomText>
                    <CustomText className="form-text">Producto y/o servicio</CustomText>
                    <CustomDropdown
                        id="QuejasNivelAT"
                        options={NIVELES_AT}
                        className="form-dropdown"
                        onChange={(value) => setNivelAT(value)}
                        value={nivelAT}
                    />
                    <CustomInput
                        id="QuejasProducto"
                        placeholder="Producto y/o servicio"
                        className="form-input"
                        onChange={(e) => setProducto(e.target.value)}
                        value={producto}
                    />
                    {errors.QuejasNivelAT && <CustomText className="form-text-error">{errors.QuejasNivelAT}</CustomText>}
                    {errors.QuejasProducto && <CustomText className="form-text-error">{errors.QuejasProducto}</CustomText>}
                    <CustomText className="form-text">Causa de la queja</CustomText>
                    <CustomText className="form-text">PORI</CustomText>
                    <CustomInput
                        id="QuejasCausa"
                        placeholder="Causa de la queja"
                        className="form-input"
                        onChange={(e) => setCausa(e.target.value)}
                        value={causa}
                    />
                    <CustomDropdown
                        id="QuejasPORI"
                        options={PORI_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setPORI(value)}
                        value={PORI}
                    />
                    {errors.QuejasCausa && <CustomText className="form-text-error">{errors.QuejasCausa}</CustomText>}
                    {errors.QuejasPORI && <CustomText className="form-text-error">{errors.QuejasPORI}</CustomText>}
                    <CustomText className="form-text" id="text-alone">Estado</CustomText>
                    <CustomDropdown
                        id="QuejasEstatus"
                        options={ESTATUS_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setEstatus(value)}
                        value={estatus}
                    />
                    {errors.QuejasEstatus && <CustomText className="form-text-error" id='text-alone'>{errors.QuejasEstatus}</CustomText>}
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
                        value={estado}
                    />
                    <CustomDropdown
                        id="QuejasMunId"
                        options={MUNICIPIOS}
                        className="form-dropdown"
                        onChange={(value) => setMunicipio(value)}
                        value={municipio}
                    />
                    {errors.QuejasEstados && <CustomText className="form-text-error">{errors.QuejasEstados}</CustomText>}
                    {errors.QuejasMunId && <CustomText className="form-text-error">{errors.QuejasMunId}</CustomText>}
                    <CustomText className="form-text">Localidad</CustomText>
                    <CustomText className="form-text">Colonia</CustomText>
                    <CustomInput
                        id="QuejasLocId"
                        placeholder="Localidad"
                        className="form-input"
                        onChange={(e) => setLocalidad(e.target.value)}
                        value={localidad}
                    />
                    <CustomInput
                        id="QuejasColId"
                        placeholder="Colonia"
                        className="form-input"
                        onChange={(e) => setColonia(e.target.value)}
                        value={colonia}
                    />
                    {errors.QuejasLocId && <CustomText className="form-text-error">{errors.QuejasLocId}</CustomText>}
                    {errors.QuejasColId && <CustomText className="form-text-error">{errors.QuejasColId}</CustomText>}
                    <CustomText className="form-text" id="text-alone">Código Postal</CustomText>
                    <CustomInput
                        id="QuejasCP"
                        placeholder="Código Postal"
                        className="form-input"
                        onChange={(e) => setCP(e.target.value)}
                        maxLength={10}
                        value={cp}
                    />
                    {errors.QuejasCP && <CustomText className="form-text-error" id='text-alone'>{errors.QuejasCP}</CustomText>}
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
                        value={tipoPersona}
                    />
                    <CustomInput
                        id="QuejasEdad"
                        placeholder="Edad"
                        type="text"
                        className="form-input"
                        onChange={(e) => setEdad(e.target.value)}
                        value={edad}
                    />
                    {errors.QuejasTipoPersona && <CustomText className="form-text-error">{errors.QuejasTipoPersona}</CustomText>}
                    {errors.QuejasEdad && <CustomText className="form-text-error">{errors.QuejasEdad}</CustomText>}
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
                    {errors.sexo && <CustomText className="form-text-error" id='text-alone'>{errors.sexo}</CustomText>}
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
                        value={fecResolucion}
                    />
                    <CustomInput
                        id="QuejasFecNotificacion"
                        placeholder="Fecha de notificación"
                        type="date"
                        className="form-input"
                        onChange={(e) => setFecNotificacion(e.target.value)}
                        value={fecNotificacion}
                    />
                    {errors.QuejasFecResolucion && <CustomText className="form-text-error">{errors.QuejasFecResolucion}</CustomText>}
                    {errors.QuejasFecNotificacion && <CustomText className="form-text-error">{errors.QuejasFecNotificacion}</CustomText>}
                    <CustomText className="form-text">Sentido de resolución</CustomText>
                    <CustomText className="form-text">Número de Penalización</CustomText>
                    <CustomDropdown
                        id="QuejasRespuesta"
                        options={RESPUESTA_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setRespuesta(value)}
                        value={respuesta}
                    />
                    <CustomInput
                        id="QuejasNumPenal"
                        placeholder="Número de penalización"
                        className="form-input"
                        onChange={(e) => setNumPenal(e.target.value)}
                        maxLength={4}
                        value={numPenal}
                    />
                    {errors.QuejasRespuesta && <CustomText className="form-text-error">{errors.QuejasRespuesta}</CustomText>}
                    {errors.QuejasNumPenal && <CustomText className="form-text-error">{errors.QuejasNumPenal}</CustomText>}
                    <CustomText className="form-text" id="text-alone">Tipo de penalización</CustomText>
                    <CustomDropdown
                        id="QuejasPenalizacion"
                        options={PENALIZACION_OPTIONS}
                        className="form-dropdown"
                        onChange={(value) => setPenalizacion(value)}
                        value={penalizacion}
                    />
                    {errors.QuejasPenalizacion && <CustomText className="form-text-error">{errors.QuejasPenalizacion}</CustomText>}
                </div>

                <CustomModal
                    isOpen={success} // Mostrar modal solo si isSuccess es true
                    message={successMessage} // Pasamos el mensaje con el folio eliminado
                    onClose={closeModal}
                    isSuccess={true} // Solo muestra el botón de "Cerrar"
                />

                <div className="form-actions">
                    <CustomButton type="button" className='submit-button' onClick={saveComplaint}>Enviar</CustomButton>
                    <CustomButton type="button" className='clear-button' onClick={handleClear}>Limpiar</CustomButton>
                </div>
            </form>
        </div>
    );
}

export { CreateComplaints };
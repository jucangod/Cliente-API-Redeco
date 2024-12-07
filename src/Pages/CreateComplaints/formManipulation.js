import { useState, useRef } from 'react';
import React from 'react';
import { postComplaints } from '../../Services/complains.service';
import { AppContext } from '../../Services/ChangeUserView';

export const useChooseOptions = () => {
    const {
        changeComplaints
    } = React.useContext(AppContext);

    // Crear los useState dentro de chooseOptions.js
    const formRef = useRef(null);
    const [folio, setFolio] = useState('');
    const [mes, setMes] = useState('');
    const [denominacion, setDenominacion] = useState('');
    const [num, setNum] = useState('');
    const [sector, setSector] = useState('');
    const [medio, setMedio] = useState('');
    const [nivelAT, setNivelAT] = useState('');
    const [producto, setProducto] = useState('');
    const [causa, setCausa] = useState('');
    const [PORI, setPORI] = useState('');
    const [estatus, setEstatus] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [colonia, setColonia] = useState('');
    const [cp, setCP] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [tipoPersona, setTipoPersona] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [numPenal, setNumPenal] = useState('');
    const [penalizacion, setPenalizacion] = useState('');
    const [fecRecepcion, setFecRecepcion] = useState('');
    const [fecResolucion, setFecResolucion] = useState('');
    const [fecNotificacion, setFecNotificacion] = useState('');
    const [loadingSave, setLoadingSave] = useState(false); // Estado para mostrar un indicador de carga.
    const [success, setSuccess] = useState(false); // Estado para determinar si la operación fue exitosa.
    const [successMessage, setSuccessMessage] = useState(''); // Mensaje de éxito.
    const [errorSave, setErrorSave] = useState(''); // Mensaje de error.
    const [isModalOpen, setModalOpen] = useState(false);


    // Maneja la actualización de los estados de dropdowns
    const handleDropdownChange = (e, setState) => {
        const { value } = e.target;
        setState(value);
    };

    const handleClear = () => {
        setFolio('');
        setMes('');
        setDenominacion('');
        setSector('');
        setNum('');
        setMedio('');
        setNivelAT('');
        setProducto('');
        setCausa('');
        setPORI('');
        setEstatus('');
        setEstado('');
        setMunicipio('');
        setColonia('');
        setCP('');
        setLocalidad('');
        setTipoPersona('');
        setEdad('');
        setSexo('');
        setRespuesta('');
        setNumPenal('');
        setPenalizacion('');
        setFecRecepcion('');
        setFecResolucion('');
        setFecNotificacion('');
    };

    const saveComplaint = async () => {
        try {
            setLoadingSave(true);
            
            // Construimos un objeto con los datos del formulario.
            const complaintData = {
                folio,
                mes,
                denominacion,
                num,
                sector,
                medio,
                nivelAT,
                producto,
                causa,
                PORI,
                estatus,
                estado,
                municipio,
                colonia,
                cp,
                localidad,
                tipoPersona,
                edad,
                sexo,
                respuesta,
                numPenal,
                penalizacion,
                fecRecepcion,
                fecResolucion,
                fecNotificacion,
            };
    
            // Enviamos la queja mediante la función postComplaint (debes implementarla).
            await postComplaints(complaintData);
    
            // Establecemos el estado de éxito y mostramos el mensaje.
            setSuccess(true);
            setSuccessMessage(`Queja con folio ${folio} registrada exitosamente.`);
            console.log(successMessage);
    
            // Limpiamos los campos del formulario.
            handleClear();
        } catch (error) {
            console.error('Error al registrar la queja:', error);
            setErrorSave('Hubo un error al registrar la queja.');
        } finally {
            setLoadingSave(false); // Terminamos el proceso de carga.
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        setSuccess(false);
        setSuccessMessage('');
        changeComplaints('ver')
    };    

    return {
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
        setNumPenal, numPenal,
        setPenalizacion, penalizacion,
        setNum, num,
        handleClear,
        formRef,
        saveComplaint,
        loadingSave,
        success,
        successMessage,
        errorSave,
        closeModal
    };    
};
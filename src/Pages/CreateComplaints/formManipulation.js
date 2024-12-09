import { useState, useRef } from 'react';
import React from 'react';
import { postComplaints } from '../../Services/complaints.service';
import { AppContext } from '../../Services/ChangeUserView';
import quejasSchema from '../../Services/complaintsValidation';

export const useChooseOptions = () => {
    const { changeComplaints } = React.useContext(AppContext);

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
    const [loadingSave, setLoadingSave] = useState(false);
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorSave, setErrorSave] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const [errors, setErrors] = useState({
        folio: '',
        mes: '',
        denominacion: '',
        sector: '',
        num: '',
        fecRecepcion: '',
        medio: '',
        nivelAT: '',
        producto: '',
        causa: '',
        PORI: '',
        estatus: '',
        estado: '',
        municipio: '',
        colonia: '',
        cp: '',
        localidad: '',
        tipoPersona: '',
        edad: '',
        sexo: '',
        respuesta: '',
        numPenal: '',
        penalizacion: '',
        fecResolucion: '',
        fecNotificacion: '',
    });

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
    
            // Construimos el objeto con los datos del formulario.
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
    
            // Validamos los datos antes de enviarlos.
            const { error } = quejasSchema.validate(complaintData, { abortEarly: false });

            if (error) {
                // Mapear los errores para mostrarlos en el estado
                const validationErrors = error.details.map((detail) => ({
                    field: detail.path[0],
                    message: detail.message,
                }));

                const errorMap = validationErrors.reduce((acc, { field, message }) => {
                    acc[field] = message;
                    return acc;
                }, {});

                setErrors(errorMap);
                setErrorSave(validationErrors.map(err => `${err.field}: ${err.message}`).join('\n'));
                return;
            }
    
            // Enviamos la queja mediante la función postComplaints.
            await postComplaints(complaintData);
    
            // Establecemos el estado de éxito.
            setSuccess(true);
            setSuccessMessage(`Queja con folio ${folio} registrada exitosamente.`);
    
            // Limpiamos los campos del formulario.
            handleClear();
        } catch (error) {
            console.error('Error al registrar la queja:', error);
            setErrorSave('Hubo un error al registrar la queja.');
        } finally {
            setLoadingSave(false);
        }
    };    

    const closeModal = () => {
        setModalOpen(false);
        setSuccess(false);
        setSuccessMessage('');
        changeComplaints('ver');
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
        closeModal,
        errors
    };
};
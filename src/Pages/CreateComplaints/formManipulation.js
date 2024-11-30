import { useState, useRef } from 'react';

export const useChooseOptions = () => {
    // Crear los useState dentro de chooseOptions.js
    const formRef = useRef(null);
    const [folio, setFolio] = useState('');
    const [mes, setMes] = useState('');
    const [denominacion, setDenominacion] = useState('');
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
      
    return {
        folio, setFolio,
        mes, setMes,
        denominacion, setDenominacion,
        sector, setSector,
        medio, setMedio,
        nivelAT, setNivelAT,
        producto, setProducto,
        causa, setCausa,
        PORI, setPORI,
        estatus, setEstatus,
        estado, setEstado,
        municipio, setMunicipio,
        colonia, setColonia,
        cp, setCP,
        localidad, setLocalidad,
        tipoPersona, setTipoPersona,
        edad, setEdad,
        sexo, setSexo,
        respuesta, setRespuesta,
        numPenal, setNumPenal,
        penalizacion, setPenalizacion,
        fecRecepcion, setFecRecepcion,
        fecResolucion, setFecResolucion,
        fecNotificacion, setFecNotificacion,
        handleDropdownChange,
        handleClear, 
        formRef
    };
};
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
    QuejasFolio: '',
    QuejasNoMes: '',
    QuejasDenominacion: '',
    QuejasNum: '',
    QuejasSector: '',
    QuejasMedio: '',
    QuejasNivelAT: '',
    QuejasProducto: '',
    QuejasCausa: '',
    QuejasPORI: '',
    QuejasEstatus: '',
    QuejasEstados: '',
    QuejasMunId: '',
    QuejasColId: '',
    QuejasCP: '',
    QuejasLocId: '',
    QuejasTipoPersona: '',
    QuejasEdad: '',
    QuejasSexo: '',
    QuejasRespuesta: '',
    QuejasNumPenal: '',
    QuejasPenalizacion: '',
    QuejasFecRecepcion: '',
    QuejasFecResolucion: '',
    QuejasFecNotificacion: '',
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
    setErrors({});
    setErrorSave('');
  };

  const saveComplaint = async () => {
    console.log('saveComplaint llamado');
    try {
      setLoadingSave(true);
      console.log('Cargando...');

      // Limpiar errores antes de la validación
      setErrors({});
      setErrorSave('');

      // Construir los datos del formulario
      const complaintData = {
        QuejasFolio: folio,
        QuejasNoMes: mes,
        QuejasDenominacion: denominacion,
        QuejasNum: num,
        QuejasSector: sector,
        QuejasMedio: medio,
        QuejasNivelAT: nivelAT,
        QuejasProducto: producto,
        QuejasCausa: causa,
        QuejasPORI: PORI,
        QuejasEstatus: estatus,
        QuejasEstados: estado,
        QuejasMunId: municipio,
        QuejasColId: colonia,
        QuejasCP: cp,
        QuejasLocId: localidad || 0,
        QuejasTipoPersona: tipoPersona,
        QuejasEdad: edad || null,
        QuejasSexo: sexo || null,
        QuejasRespuesta: respuesta || null,
        QuejasNumPenal: numPenal || null,
        QuejasPenalizacion: penalizacion || null,
        QuejasFecRecepcion: fecRecepcion,
        QuejasFecResolucion: fecResolucion || null,
        QuejasFecNotificacion: fecNotificacion || null,
      };

      console.log(fecRecepcion);
      // Validar usando el esquema
      const { error } = quejasSchema.validate(complaintData, {
        abortEarly: false,
      });
      console.log('Validando datos...', complaintData);

      if (error) {
        // Mapeo detallado de errores
        const validationErrors = error.details.reduce((acc, detail) => {
          const field = detail.path.join('.'); // Asegura compatibilidad con campos anidados
          acc[field] = detail.message; // Usa los mensajes personalizados de Joi
          return acc;
        }, {});
        console.log('Errores de validación:', validationErrors);

        // Establecer errores en el estado
        setErrors(validationErrors);
        setErrorSave(Object.values(validationErrors).join('\n'));
        return;
      }

      // Enviar los datos si no hay errores
      const response = await postComplaints(complaintData);
      console.log('Respuesta del servidor:', response);
      console.log('Queja registrada exitosamente');

      setSuccess(true);
      setSuccessMessage(`Queja con folio ${folio} registrada exitosamente.`);
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
    setFolio,
    folio,
    setMes,
    mes,
    setDenominacion,
    denominacion,
    setSector,
    sector,
    setFecRecepcion,
    fecRecepcion,
    setMedio,
    medio,
    setNivelAT,
    nivelAT,
    setProducto,
    producto,
    setCausa,
    causa,
    setPORI,
    PORI,
    setEstatus,
    estatus,
    setEstado,
    estado,
    setMunicipio,
    municipio,
    setColonia,
    colonia,
    setCP,
    cp,
    setLocalidad,
    localidad,
    setTipoPersona,
    tipoPersona,
    setEdad,
    edad,
    sexo,
    setSexo,
    setFecResolucion,
    fecResolucion,
    setFecNotificacion,
    fecNotificacion,
    setRespuesta,
    respuesta,
    setNumPenal,
    numPenal,
    setPenalizacion,
    penalizacion,
    setNum,
    num,
    handleClear,
    formRef,
    saveComplaint,
    loadingSave,
    success,
    successMessage,
    errorSave,
    closeModal,
    errors,
  };
};

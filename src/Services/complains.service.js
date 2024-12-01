const postComplains = async (complaint) => {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error(
      JSON.stringify({
        errors: {
          FOL123456: [
            'La fecha de recepción debe tener el formato dd/mm/aaaa.',
            'La fecha de recepción debe ser válida.',
          ],
        },
        message:
          'Ninguno de los registros enviados fue adicionado hasta que se haga la corrección total de los folios.',
      })
    );
  }

  return;
};

const getAllComplains = async () => {
  return [
    {
      QuejasDenominacion: 'Queja sobre el servicio',
      QuejasSector: 'Atención al Cliente',
      QuejasNoMes: 10,
      QuejasNum: 1,
      QuejasFolio: 'FOL123456',
      QuejasFecRecepcion: '15/10/2024',
      QuejasMedio: 2,
      QuejasNivelAT: 1,
      QuejasProducto: 'Producto A',
      QuejasCausa: 'CA',
      QuejasPORI: 'SI',
      QuejasEstatus: 1,
      QuejasEstados: 5,
      QuejasMunId: 123,
      QuejasLocId: 9,
      QuejasColId: 456,
      QuejasCP: 78910,
      QuejasTipoPersona: 1,
      QuejasSexo: 'H',
      QuejasEdad: 30,
      QuejasFecResolucion: null,
      QuejasFecNotificacion: null,
      QuejasRespuesta: 2,
      QuejasNumPenal: null,
      QuejasPenalizacion: null,
    },
    {
      QuejasDenominacion: 'Queja sobre el servicio',
      QuejasSector: 'Atención al Cliente',
      QuejasNoMes: 10,
      QuejasNum: 1,
      QuejasFolio: 'FOL123458',
      QuejasFecRecepcion: '15/10/2024',
      QuejasMedio: 2,
      QuejasNivelAT: 1,
      QuejasProducto: 'Producto A',
      QuejasCausa: 'CA',
      QuejasPORI: 'SI',
      QuejasEstatus: 1,
      QuejasEstados: 5,
      QuejasMunId: 123,
      QuejasLocId: 9,
      QuejasColId: 456,
      QuejasCP: 78910,
      QuejasTipoPersona: 1,
      QuejasSexo: 'H',
      QuejasEdad: 30,
      QuejasFecResolucion: null,
      QuejasFecNotificacion: null,
      QuejasRespuesta: 2,
      QuejasNumPenal: null,
      QuejasPenalizacion: null,
    },
  ];
};

const getComplaint = async (complaintId) => {
  return [
    {
      QuejasDenominacion: 'Queja sobre el servicio',
      QuejasSector: 'Atención al Cliente',
      QuejasNoMes: 10,
      QuejasNum: 1,
      QuejasFolio: 'FOL123456',
      QuejasFecRecepcion: '15/10/2024',
      QuejasMedio: 2,
      QuejasNivelAT: 1,
      QuejasProducto: 'Producto A',
      QuejasCausa: 'CA',
      QuejasPORI: 'SI',
      QuejasEstatus: 1,
      QuejasEstados: 5,
      QuejasMunId: 123,
      QuejasLocId: 9,
      QuejasColId: 456,
      QuejasCP: 78910,
      QuejasTipoPersona: 1,
      QuejasSexo: 'H',
      QuejasEdad: 30,
      QuejasFecResolucion: null,
      QuejasFecNotificacion: null,
      QuejasRespuesta: 2,
      QuejasNumPenal: null,
      QuejasPenalizacion: null,
    },
    {
      QuejasDenominacion: 'Queja sobre el servicio',
      QuejasSector: 'Atención al Cliente',
      QuejasNoMes: 10,
      QuejasNum: 1,
      QuejasFolio: 'FOL123458',
      QuejasFecRecepcion: '15/10/2024',
      QuejasMedio: 2,
      QuejasNivelAT: 1,
      QuejasProducto: 'Producto A',
      QuejasCausa: 'CA',
      QuejasPORI: 'SI',
      QuejasEstatus: 1,
      QuejasEstados: 5,
      QuejasMunId: 123,
      QuejasLocId: 9,
      QuejasColId: 456,
      QuejasCP: 78910,
      QuejasTipoPersona: 1,
      QuejasSexo: 'H',
      QuejasEdad: 30,
      QuejasFecResolucion: null,
      QuejasFecNotificacion: null,
      QuejasRespuesta: 2,
      QuejasNumPenal: null,
      QuejasPenalizacion: null,
    },
  ];
};

const deleteComplaint = async (complaintId) => {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error(
      JSON.stringify({
        message: `No se encontró ninguna queja con el folio ${complaintId}.`,
      })
    );
  }

  return;
};

export { postComplains, getAllComplains, getComplaint, deleteComplaint };

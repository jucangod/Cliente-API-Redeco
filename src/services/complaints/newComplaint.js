// src/services/complaints/newComplaint.js
export const createComplaint = async (complaintData) => {
    try {
      const response = await fetch('URL_API_CREATE_COMPLAINT', {
        method: 'POST',
        body: JSON.stringify(complaintData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) throw new Error('Error al crear la queja');
      const data = await response.json();
      return data;  // Retornar la respuesta con los datos de la queja creada
    } catch (error) {
      console.error('Error al crear la queja:', error);
      throw error;
    }
  };
  
import { useState, useRef } from 'react';
import { login } from '../../Services/login'; // Importa la función de login

// Función de validación
const validateLogin = async (username, password) => {
    // Verificación local de campos vacíos
    if (!username.trim()) {
        throw new Error('Por favor, introduzca su usuario.');
    }

    if (!password.trim()) {
        throw new Error('Por favor, introduzca su contraseña.');
    }

    // Verificar en el servidor
    try {
        const result = await login({ username, password });
        return result; // Retorna mensaje de éxito si las credenciales son válidas
    } catch (error) {
        // Verificar que el error contiene la palabra 'usuario'
        if (error.message.toLowerCase().includes('usuario')) {
            throw new Error('El usuario no es correcto.');
        } 
        // Verificar que el error contiene la palabra 'contraseña'
        else if (error.message.toLowerCase().includes('contraseña')) {
            throw new Error('La contraseña no es correcta.');
        } 
        // Si no es ni usuario ni contraseña, lanzar error genérico
        else {
            throw new Error('Error inesperado en el login.');
        }
    }        
};

// Función para manejar el envío del formulario
const handleSubmit = async (e, userRef, passwordRef, setErrorMessage, logUser) => {
    e.preventDefault();
    setErrorMessage(''); // Limpiar mensaje de error al intentar enviar el formulario

    const username = userRef.current.value.trim(); // Eliminar espacios innecesarios
    const password = passwordRef.current.value.trim();

    try {
        // Validar datos usando la función de validación de validation.js
        const response = await validateLogin(username, password);

        // Mostrar mensaje de éxito
        alert(response.message);
        logUser(); // Llamar a la función logUser si el login es exitoso
    } catch (error) {
        // Mostrar mensaje de error si hay problemas
        setErrorMessage(error.message);
    }
};

export { validateLogin, handleSubmit };
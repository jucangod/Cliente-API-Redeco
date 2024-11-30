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
// handleSubmit.js

const handleSubmit = (e, userRef, passwordRef, setErrorMessage, logUser) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    const username = userRef.current.value;
    const password = passwordRef.current.value;

    return new Promise((resolve, reject) => {
        try {
            // Llamar a la función logUser (que debes definir para manejar la autenticación)
            const user = logUser(username, password); // logUser es la función de login

            // Si la autenticación es exitosa
            if (user) {
                resolve(user); // Resolvemos la promesa con el usuario
            }
        } catch (error) {
            // Si hay un error, rechazamos la promesa
            reject(error);
        }
    });
};

export { validateLogin, handleSubmit };
import { useState, useRef } from 'react';
import { login } from '../../Services/login'; // Importa la función de login

// Función de validación
const validateLogin = async (username, password) => {
    if (!username.trim()) {
        throw new Error('Por favor, introduzca su usuario.');
    }

    if (!password.trim()) {
        throw new Error('Por favor, introduzca su contraseña.');
    }

    try {
        const result = await login({ username, password });
        return result;
    } catch (error) {
        // Analiza las etiquetas en los mensajes de error
        if (error.message.includes('USER_ERROR')) {
            throw new Error('El usuario no es correcto.');
        } else if (error.message.includes('PASSWORD_ERROR')) {
            throw new Error('La contraseña no es correcta.');
        } else if (error.message.includes('TOKEN_ERROR')) {
            throw new Error('Error al generar el token. Intente de nuevo más tarde.');
        } else {
            throw new Error('Error inesperado. Intente de nuevo.');
        }
    }
};

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
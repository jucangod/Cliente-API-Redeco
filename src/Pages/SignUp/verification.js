// verification.js
import { signUp } from '../../Services/signUp'; // Importa la función de signUp

// Función de validación
const validateSignUp = async (user, password, confirmPassword, key) => {
    // Verificación local de campos vacíos
    if (!user.trim()) {
        throw new Error('Por favor, introduzca su usuario.');
    }

    if (!password.trim()) {
        throw new Error('Por favor, introduzca su contraseña.');
    }

    if (!confirmPassword.trim()) {
        throw new Error('Por favor, confirme su contraseña.');
    }

    if (!key.trim()) {
        throw new Error('Por favor, introduzca su key.');
    }

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        throw new Error('Las contraseñas no coinciden.');
    }

    // Verificar en el servidor
    try {
        const result = await signUp({ user, password, key });
        return result; // Retorna mensaje de éxito si los datos son correctos
    } catch (error) {
        // Verificar que el error contiene la palabra 'usuario'
        if (error.message.toLowerCase().includes('usuario')) {
            throw new Error('El usuario no es correcto.');
        } 
        // Verificar que el error contiene la palabra 'contraseña'
        else if (error.message.toLowerCase().includes('contraseña')) {
            throw new Error('La contraseña no es correcta.');
        }
        // Verificar que el error contiene la palabra 'key'
        else if (error.message.toLowerCase().includes('key')) {
            throw new Error('La key no es correcta.');
        }
        // Si no es ninguno de los anteriores, lanzar un error genérico
        else {
            throw new Error('Error inesperado en el registro.');
        }
    }        
};

// Función para manejar el envío del formulario
const handleSubmit = async (e, userRef, passwordRef, confirmPasswordRef, keyRef, setErrorMessage, changeView) => {
    e.preventDefault();
    setErrorMessage(''); // Limpiar mensaje de error al intentar enviar el formulario

    const user = userRef.current.value.trim(); // Eliminar espacios innecesarios
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();
    const key = keyRef.current.value.trim();

    try {
        // Validar datos usando la función de validación de verification.js
        const response = await validateSignUp(user, password, confirmPassword, key);

        // Mostrar mensaje de éxito
        alert(response.message);
        changeView(); // Cambiar la vista al login después del registro exitoso
    } catch (error) {
        // Mostrar mensaje de error si hay problemas
        setErrorMessage(error.message);
    }
};

export { validateSignUp, handleSubmit };
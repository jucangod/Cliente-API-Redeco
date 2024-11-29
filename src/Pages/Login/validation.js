import { login } from '../../Services/login'; // Importa la función de login

const validateLogin = async (userRef, passwordRef) => {
    const inputData = {
        username: userRef.current.value,
        password: passwordRef.current.value,
    };

    const { username, password } = inputData;

    // Aquí verificamos si los campos están vacíos
    if (!username || !password) {
        throw new Error('Por favor, complete todos los campos');
    }

    // Ahora verificamos si las credenciales son correctas
    try {
        const result = await login({ username, password });
        return result; // Si es exitoso, retornamos el resultado
    } catch (error) {
        throw new Error('Error en el login: ' + error.message); // En caso de error, lo lanzamos
    }
};

export { validateLogin };
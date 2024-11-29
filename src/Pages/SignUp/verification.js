import { signUp } from '../../Services/signUp';

const handleVerification = async (userRef, passwordRef, confirmPasswordRef, keyRef) => {
    const inputData = {
        user: userRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
        key: keyRef.current.value,
    };

    const { user, password, confirmPassword, key } = inputData;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        throw new Error('Las contraseñas no coinciden');
    }

    // Llamar a la función de signUp
    try {
        const result = signUp({ user, password, key });
        return result; // Devolver el resultado exitoso
    } catch (error) {
        throw new Error('Error en el registro: ' + error.message); // Manejo de errores
    }
};

export { handleVerification };
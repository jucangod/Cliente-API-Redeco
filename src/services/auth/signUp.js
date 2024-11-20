export const signUp = async (username, password, key) => {
    // Aquí debes llamar a la API para registrar al usuario
    try {
        // Simulamos una respuesta exitosa
        if (username && password && key) {
            return { success: true };
        } else {
            return { success: false, message: 'Faltan campos requeridos' };
        }
    } catch (err) {
        console.error('Error al intentar registrarse:', err);
        throw new Error('Error al intentar registrarse');
    }
};
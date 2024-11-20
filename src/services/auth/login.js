export const login = async (username, password) => {
    // Aquí debes llamar a la API para autenticar al usuario
    try {
        // Simulamos una respuesta exitosa
        if (username === 'usuario' && password === 'contraseña') {
            return { success: true };
        } else {
            return { success: false, message: 'Credenciales incorrectas' };
        }
    } catch (err) {
        console.error('Error al intentar hacer login:', err);
        throw new Error('Error al intentar hacer login');
    }
};
export const signUp = async (username, password, key) => {
    try {
        if (!username || !password || !key) {
            return { success: false, message: 'Faltan campos requeridos' };
        }

        // Obtener los usuarios guardados en localStorage, si existen
        const users = JSON.parse(localStorage.getItem('users')) || {};

        // Verificar si el usuario ya está registrado
        if (users[username]) {
            return { success: false, message: 'El nombre de usuario ya está en uso' };
        }

        // Almacenar el nuevo usuario en localStorage
        users[username] = { password, key };
        localStorage.setItem('users', JSON.stringify(users));
        
        return { success: true, message: 'Usuario registrado con éxito' };
    } catch (err) {
        console.error('Error al intentar registrarse:', err);
        return { success: false, message: 'Error al intentar registrarse' };
    }
};
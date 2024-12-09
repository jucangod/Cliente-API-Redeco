const signUp = async ({ user, password, key }) => {
    if (!user || !password || !key) {
        throw new Error('Por favor, ingrese todos los campos.');
    }

    // Validaciones básicas
    if (user !== 'test') {
        throw new Error('USER_ERROR: Usuario no permitido.');
    } else if (password !== '123') {
        throw new Error('PASSWORD_ERROR: Contraseña no válida.');
    } else if (key !== '123') {
        throw new Error('KEY_ERROR: Key incorrecta.');
    }

    // Generar token de autenticación
    const token_access = generateToken();

    if (!token_access) {
        throw new Error('TOKEN_ERROR: No se pudo generar el token. Intente de nuevo.');
    }

    // Guardar el token en localStorage
    localStorage.setItem('token_access', token_access);

    // Devolver datos del usuario y el token
    return {
        message: 'Registro exitoso y autenticación completa.',
        user: {
            username: user,
            token_access,
        },
    };
};

const generateToken = () => 'token';

export { signUp };
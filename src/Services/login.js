const login = async ({ username, password }) => {
    if (!username || !password) {
        throw new Error('Por favor, ingrese todos los campos.');
    }

    if (username !== 'test') {
        throw new Error('USER_ERROR: Usuario incorrecto.');
    } else if (password !== '123') {
        throw new Error('PASSWORD_ERROR: Contraseña incorrecta.');
    } else {
        const token_access = generateToken();

        if (!token_access) {
            throw new Error('TOKEN_ERROR: No se pudo generar el token. Intente de nuevo.');
        }

        return {
            message: 'Autenticación exitosa',
            user: {
                username,
                token_access,
            },
        };
    }
};

const generateToken = () => 'token'; // Simulación

export { login };
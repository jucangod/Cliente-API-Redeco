const signUp = ({ user, password, key }) => {
    // Simulamos la autenticación
    if (user !== 'test') {
        // Si el usuario no es correcto, lanzamos un error específico para el usuario
        throw new Error('Usuario incorrecto.');
    } else if (password !== '123') {
        // Si la contraseña es incorrecta, lanzamos un error específico para la contraseña
        throw new Error('Contraseña incorrecta.');
    } else if (key !== '123') {
        // Si la "key" es incorrecta, lanzamos un error específico para la key
        throw new Error('Key incorrecta.');
    } else {
        // Si todos los campos son correctos, retornamos el mensaje de autenticación exitosa
        return {
            message: 'Registro exitoso',
            user: {
                username: user,
                token_access: 'token',
            },
        };
    }
};

export { signUp };
const login = async ({ username, password }) => {
  // Verificación de campos vacíos
  if (!username || !password) {
    throw new Error('Por favor, ingrese todos los campos.');
  }

  // Simulamos la autenticación
  if (username !== 'test') {
    // Si el usuario no es correcto, lanzamos un error específico para el usuario
    throw new Error('Usuario o contraseña incorrecto.');
  } else if (password !== '123') {
    // Si la contraseña es incorrecta, lanzamos un error específico para la contraseña
    throw new Error('Usuario o contraseña incorrecto.');
  } else {
    // Si ambos son correctos, retornamos el mensaje de autenticación exitosa
    return {
      message: 'Autenticación exitosa',
      user: {
        username,
        token_access: 'token',
      },
    };
  }
};

export { login };

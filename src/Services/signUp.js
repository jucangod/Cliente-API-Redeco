const signUp = async ({ username, password, key }) => {
  if (!username || !password || !key) {
    throw new Error('Por favor, ingrese todos los campos.');
  }

  // Validaciones básicas
  if (username !== 'test') {
    throw new Error('USER_ERROR: Usuario no permitido.');
  } else if (password !== '123') {
    throw new Error('PASSWORD_ERROR: Contraseña no válida.');
  } else if (key !== '123') {
    throw new Error('KEY_ERROR: Key incorrecta.');
  }

  return {
    message: 'Registro exitoso y autenticación completa.',
    user: {
      username: username,
      token_access: 'token_access',
    },
  };
};

export { signUp };

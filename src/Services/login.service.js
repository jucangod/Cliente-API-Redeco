const login = ({ username, password }) => {
  if (username === 'test' && password === '123') {
    return {
      message: 'Autenticación exitosa',
      user: {
        username,
        token_access: 'token',
      },
    };
  } else throw new Error('Contraseña incorrecta.');
};

export { login };

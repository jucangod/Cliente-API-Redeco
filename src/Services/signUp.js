const signUp = ({ user, password, key }) => {
  if (user == 'test' && password == 123 && key == 123)
    return {
      message: 'Autenticación exitosa',
      user: {
        username: 'test',
        token_access: 'token',
      },
    };
  else throw new Error('Error en el registro');
};

export { signUp };
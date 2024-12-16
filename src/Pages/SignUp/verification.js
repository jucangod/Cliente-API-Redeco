// verification.js
import { signUp } from '../../Services/signUp'; // Importa la función de signUp

// Función de validación
const validateSignUp = async (user, password, confirmPassword, key) => {
  // Verificación local de campos vacíos
  if (!user.trim()) {
    throw new Error('Por favor, introduzca su usuario.');
  }

  if (!password.trim()) {
    throw new Error('Por favor, introduzca su contraseña.');
  }

  if (!confirmPassword.trim()) {
    throw new Error('Por favor, confirme su contraseña.');
  }

  if (!key.trim()) {
    throw new Error('Por favor, introduzca su key.');
  }

  // Verificar si las contraseñas coinciden
  if (password !== confirmPassword) {
    throw new Error('Las contraseñas no coinciden.');
  }

  // Verificar en el servidor
  try {
    const result = await signUp({ user, password, key });
    return result; // Retorna mensaje de éxito si los datos son correctos
  } catch (error) {
    throw error;
  }
};

// Función para manejar el envío del formulario
const handleSubmit = async (
  e,
  userRef,
  passwordRef,
  confirmPasswordRef,
  keyRef,
  setErrorMessage,
  logUser,
  changeView
) => {
  e.preventDefault();
  setErrorMessage(''); // Limpiar mensaje de error al intentar enviar el formulario

  const user = userRef.current.value.trim(); // Eliminar espacios innecesarios
  const password = passwordRef.current.value.trim();
  const confirmPassword = confirmPasswordRef.current.value.trim();
  const key = keyRef.current.value.trim();

  try {
    // Validar datos usando la función de validación de verification.js
    const response = await validateSignUp(user, password, confirmPassword, key);

    const { token_access } = response.data;
    localStorage.setItem('token_access', token_access);

    // Autenticar al usuario después de registrarse
    const userData = { username: user }; // Ajusta según cómo quieras manejar la sesión
    logUser(userData); // Llama a la función de login y almacena al usuario
    changeView(); // Cambiar la vista después del registro exitoso
  } catch (error) {
    // Mostrar mensaje de error si hay problemas
    setErrorMessage(error.message);
  }
};

export { validateSignUp, handleSubmit };

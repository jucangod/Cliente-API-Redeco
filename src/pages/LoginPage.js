import React, { useState } from 'react';
import { login } from '../services/auth/login';  // Asegúrate de tener la función de login en tus servicios

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(username, password);  // Llamada al servicio de login
      if (user) {
        // Si el login es exitoso, redirige a la página de quejas
        setError('');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError('Hubo un error al intentar iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export { LoginPage };
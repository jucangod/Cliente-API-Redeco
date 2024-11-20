import React, { useState } from 'react';
import { signUp } from '../services/auth/signUp';  // Asegúrate de tener la función de signUp en tus servicios

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      const user = await signUp(username, password, key);  // Llamada al servicio de sign up
      if (user) {
        // Si el registro es exitoso, redirige al login
        setError('');
      } else {
        setError('Hubo un error al crear la cuenta');
      }
    } catch (error) {
      setError('Hubo un error al intentar registrar');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        required
      />
      {error && <p>{error}</p>}
      <button type="submit">Crear cuenta</button>
    </form>
  );
}

export { SignUpPage };
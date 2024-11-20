import React, { useState } from 'react';
import { signUp } from '../services/auth/signUp'; // Importamos la función desde services/auth

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [key, setKey] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signUp(username, password, key);
        setMessage(result.message);
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Key"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <button type="submit">Registrar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export { SignUpPage };
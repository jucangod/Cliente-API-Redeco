import { useState } from 'react';
import { Input } from '../components/ui/Input';  // Usamos el componente Input
import { Button } from '../components/ui/Button';  // Usamos el componente Button
import { login } from '../services/auth/login';  // Llamamos a la función de login desde los servicios

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            login(username, password)
                .then((response) => {
                    if (response.success) {
                        alert('Login exitoso');
                    } else {
                        setError('Credenciales incorrectas');
                    }
                })
                .catch((err) => setError('Hubo un error al intentar iniciar sesión.'));
        } else {
            setError('Por favor, completa todos los campos');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <Input label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                {error && <p>{error}</p>}
                <Button text="Entrar" type="submit" />
            </form>
        </div>
    );
}

export { LoginPage };
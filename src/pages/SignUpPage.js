import { useState } from 'react';
import { Input } from '../components/ui/Input';  // Usamos el componente Input
import { Button } from '../components/ui/Button';  // Usamos el componente Button
import { signUp } from '../services/auth/signUp';  // Llamamos a la función de signUp desde los servicios

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [key, setKey] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        if (username && password && confirmPassword && key) {
            if (password === confirmPassword) {
                signUp(username, password, key)
                    .then((response) => {
                        if (response.success) {
                            alert('Registro exitoso');
                        } else {
                            setError(response.message);
                        }
                    })
                    .catch((err) => setError('Hubo un error al intentar registrarse.'));
            } else {
                setError('Las contraseñas no coinciden');
            }
        } else {
            setError('Por favor, completa todos los campos');
        }
    };

    return (
        <div>
            <h1>Registrarse</h1>
            <form onSubmit={handleSignUp}>
                <Input label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Input label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <Input label="Key" type="text" value={key} onChange={(e) => setKey(e.target.value)} required />
                {error && <p>{error}</p>}
                <Button text="Registrarse" type="submit" />
            </form>
        </div>
    );
}

export { SignUpPage };
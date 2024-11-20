import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';  // Importamos la página de Login
import { SignUpPage } from './pages/SignUpPage';  // Importamos la página de SignUp

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />  {/* Ruta para Login */}
                <Route path="/signup" element={<SignUpPage />} />  {/* Ruta para SignUp */}
            </Routes>
        </Router>
    );
}

export default App;

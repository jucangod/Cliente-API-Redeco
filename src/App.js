import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importar react-router-dom
import { HomePage } from './pages/Home'; // Página de inicio
import { SignUpPage } from './pages/SignUpPage'; // Página de registro
import { LoginPage } from './pages/LoginPage'; // Página de inicio de sesión
import { ComplaintsPage } from './pages/ComplaintsPage'; // Página de quejas
import { Header } from './layout/Header'; // Cabecera de la app
import { Footer } from './layout/Footer'; // Pie de página

const App = () => {
    return (
        <>
            <Header />  {/* Aquí renderizas el encabezado */}
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/complaints" element={<ComplaintsPage />} />
                </Routes>
            </div>
            <Footer />  {/* Aquí renderizas el pie de página */}
        </>
    );
};

export default App;
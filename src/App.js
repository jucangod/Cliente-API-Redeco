import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Body } from './layout/Body';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  // Estado para controlar si el usuario está logueado
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSection, setSelectedSection] = useState('ver');  // Controla qué sección mostrar en el body
  const navigate = useNavigate();

  // Función para cambiar la sección seleccionada
  const changeSection = (section) => {
    setSelectedSection(section);
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');  // Limpiamos el token del localStorage
    navigate('/');  // Redirigimos al inicio
  };

  return (
    <Router>
      {/* Componente Header cambia según el estado de isLoggedIn */}
      <Header isLoggedIn={isLoggedIn} logout={logout} changeSection={changeSection} />

      {/* Body se cambia según la selección en el Header */}
      <Body isLoggedIn={isLoggedIn} selectedSection={selectedSection} />

      {/* Footer que es común a todas las páginas */}
      <Footer />
    </Router>
  );
}

export default App;
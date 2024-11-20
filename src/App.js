import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Body } from './layout/Body';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedSection, setSelectedSection] = useState('ver');
  const navigate = useNavigate();

  const changeSection = (section) => {
    setSelectedSection(section);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');  // Redirige al inicio después de cerrar sesión
  };

  return (
    <Router>
      {/* Header, Body y Footer se encuentran fuera del Routes */}
      <Header isLoggedIn={isLoggedIn} logout={logout} changeSection={changeSection} />
      
      {/* Aquí ponemos las rutas específicas de las páginas */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      
      {/* Body se cambia según la selección en el Header */}
      <Body isLoggedIn={isLoggedIn} selectedSection={selectedSection} />
      <Footer />
    </Router>
  );
}

export default App;
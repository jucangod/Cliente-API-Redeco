import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate aquí está bien
import { Body } from './layout/Body';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedSection, setSelectedSection] = useState('ver');
    const navigate = useNavigate();  // El hook useNavigate ahora funciona correctamente

    const changeSection = (section) => {
        setSelectedSection(section);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        navigate('/');  // Redirige correctamente
    };

    return (
        <>
        {/* El Header, Body y Footer se seguirán renderizando normalmente */}
        <Header isLoggedIn={isLoggedIn} logout={logout} changeSection={changeSection} />
        <Body isLoggedIn={isLoggedIn} selectedSection={selectedSection} />
        <Footer />
        </>
    );
    }

export default App;
import React from 'react';

function Header({ isLoggedIn, logout, changeSection }) {
  return (
    <header>
      {/* Si el usuario está logueado, muestra los botones de 'Ver', 'Crear', 'Cerrar sesión' */}
      {isLoggedIn ? (
        <nav>
          <button onClick={() => changeSection('ver')}>Ver</button>
          <button onClick={() => changeSection('crear')}>Crear</button>
          <button onClick={logout}>Cerrar sesión</button>
        </nav>
      ) : (
        // Si no está logueado, el header estará vacío (pero se muestra el fondo)
        <nav></nav>
      )}
    </header>
  );
}

export { Header };
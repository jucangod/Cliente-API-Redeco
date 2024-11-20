import React from 'react';
import { LoginPage, SignUpPage } from '../pages';  // Importamos las páginas de login y signup
import ComplaintsPage from '../pages/ComplaintsPage';  // Suponiendo que creamos una página para ver quejas
import CreateComplaintPage from '../pages/CreateComplaintPage';  // Suponiendo que creamos una página para crear quejas

function Body({ isLoggedIn, selectedSection }) {
  return (
    <div>
      {!isLoggedIn ? (
        // Si no está logueado, mostrar las páginas de Login y Signup
        <div>
          <LoginPage />
          <SignUpPage />
        </div>
      ) : (
        // Si está logueado, mostrar la sección seleccionada
        <div>
          {selectedSection === 'ver' && <ComplaintsPage />}  {/* Mostrar quejas */}
          {selectedSection === 'crear' && <CreateComplaintPage />}  {/* Crear queja */}
        </div>
      )}
    </div>
  );
}

export { Body };
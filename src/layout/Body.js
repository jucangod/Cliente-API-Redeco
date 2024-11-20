import React from 'react';
import { LoginPage, SignUpPage } from '../pages';  // Corregido el path
import ComplaintsPage from '../pages/ComplaintsPage';  // Corregido el path
import CreateComplaintPage from '../pages/CreateComplaintPage';  // Corregido el path

function Body({ isLoggedIn, selectedSection }) {
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <LoginPage />
          <SignUpPage />
        </div>
      ) : (
        <div>
          {selectedSection === 'ver' && <ComplaintsPage />} 
          {selectedSection === 'crear' && <CreateComplaintPage />}
        </div>
      )}
    </div>
  );
}

export { Body };
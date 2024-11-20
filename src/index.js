import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';  // Importar el Router
import App from './App';  // Tu componente principal

ReactDOM.render(
    <Router> {/* Aquí envuelves la app con el Router */}
        <App />
    </Router>,
    document.getElementById('root')
);
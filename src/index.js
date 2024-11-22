import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ChangeUserView } from './Services/ChangeUserView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ChangeUserView>
            <App />
        </ChangeUserView>
    </Router>
);
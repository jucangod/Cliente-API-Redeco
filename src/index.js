import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ChangeUserView } from './Services/ChangeUserView';
// import { SignUp } from './Services/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ChangeUserView>
            <SignUp>
                <App />
            </SignUp>
        </ChangeUserView>
    </Router>
);
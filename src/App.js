import React from 'react'
import './App.css'
import { AppContext } from './Services/ChangeUserView';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';

const App = () => {
    const {
        loginPage,
        logUser
    } = React.useContext(AppContext);
    
    return (
        <>
            <header>
                {/* {logUser ? <p>Header cool</p>
                    : 
                    
                } */}
                
            </header>
            <body>
                {loginPage ? <Login /> : <SignUp />}    
            </body>
            <footer>
                <p>Derechos reservados</p>
            </footer>
        </>
    );
};

export default App;
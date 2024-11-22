import React from 'react'
import './App.css'
import { AppContext } from './Services/ChangeUserView';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';
import { LoggedHeader } from './Pages/LoggedHeader';
import { LoggedBody } from './Pages/LoggedBody';

const App = () => {
    const {
        loginPage,
        isUserLogged
    } = React.useContext(AppContext);
    
    return (
        <>
            <header>
                {isUserLogged ? <LoggedHeader /> : <p>Header cool</p>}
            </header>
            <body>
                {isUserLogged ? <LoggedBody /> : 

                }
                {loginPage ? <Login /> : <SignUp />} 
            </body>
            <footer>
                <p>Derechos reservados</p>
            </footer>
        </>
    );
};

export default App;
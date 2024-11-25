import React from 'react'
import './App.css'
import { AppContext } from './Services/ChangeUserView';
import { LoggedHeader } from './Pages/LoggedHeader';
import { LoggedBody } from './Pages/LoggedBody';
import { OutBody } from './Pages/OutBody';

const App = () => {
    const {
        isUserLogged
    } = React.useContext(AppContext);
    
    return (
        <>
            <div id='div-header'>
                {isUserLogged ? <LoggedHeader /> : <p></p>}
            </div>
            <div id='div-body'>
                {isUserLogged ? <LoggedBody /> : <OutBody/>}
            </div>
            <div id='div-footer'>
                <p>Derechos reservados</p>
            </div>
        </>
    );
};

export default App;
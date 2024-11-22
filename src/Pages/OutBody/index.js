import React from 'react'
import { AppContext } from '../../Services/ChangeUserView';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';

function OutBody() {
    const {
        loginPage
    } = React.useContext(AppContext);

    return loginPage ? <Login /> : <SignUp />
}

export { OutBody }
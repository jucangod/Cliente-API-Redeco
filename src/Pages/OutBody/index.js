import React from 'react'
import { AppContext } from '../../Services/ChangeUserView';
import { SignUp } from '../SignUp';
import { Login } from '../Login';

function OutBody() {
    const {
        loginPage
    } = React.useContext(AppContext);

    return loginPage ? <Login /> : <SignUp />
}

export { OutBody }
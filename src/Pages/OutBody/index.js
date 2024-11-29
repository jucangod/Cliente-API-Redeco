import React from 'react'
import { AppContext } from '../../Services/ChangeUserView';
import { SignUpForm } from '../SignUp';
import { Login } from '../Login';

function OutBody() {
    const {
        loginPage
    } = React.useContext(AppContext);

    return loginPage ? <Login /> : <SignUpForm />
}

export { OutBody }
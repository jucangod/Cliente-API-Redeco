import React from 'react'

const AppContext = React.createContext();

function ChangeUserView({ children }) {
    const [loginPage, setLoginPage] = React.useState(true);
    const [isUserLogged, setIsUserLogged] = React.useState(false);
    const [loggedUserView, setLoggedUserView] = React.useState('ver');

    const changeView = () => {
        setLoginPage(!loginPage);
    }

    const logUser = () => {
        setIsUserLogged(!isUserLogged)
    }

    const changeComplaints = (view) => {
        setLogedUserView(view)
    }

    return (
        <AppContext.Provider value={{
            loginPage, 
            changeView,
            isUserLogged,
            logUser,
            loggedUserView,
            changeComplaints
        }}>
            {children}
        </AppContext.Provider>
    );
};

export { ChangeUserView, AppContext };
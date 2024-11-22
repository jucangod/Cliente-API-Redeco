import React from 'react'

const AppContext = React.createContext();

function ChangeUserView({ children }) {
    const [loginPage, setLoginPage] = React.useState(true);
    const [isUserLogged, setIsUserLogged] = React.useState(false);

    const changeView = () => {
        setLoginPage(!loginPage);
    }

    const logUser = () => {
        setIsUserLogged(!isUserLogged)
    }

    return (
        <AppContext.Provider value={{
            loginPage, 
            changeView,
            isUserLogged,
            logUser
        }}>
            {children}
        </AppContext.Provider>
    );
};

export { ChangeUserView, AppContext };
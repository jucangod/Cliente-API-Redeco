import React from 'react'

const AppContext = React.createContext();

function ChangeUserView({ children }) {
    const [loginPage, setLoginPage] = React.useState(true);
    const [isUserLogged, setIsUserLogged] = React.useState(false);
    const [loggedUserView, setLoggedUserView] = React.useState('ver');
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handleClose = () => {
        setModalOpen(true)
    }

    const cancelClose = () => {
        setModalOpen(false)
    }

    const changeView = () => {
        setLoginPage(!loginPage);
    }

    const logUser = () => {
        setIsUserLogged(!isUserLogged)
        setLoginPage(true)
        if (loginPage) {
            localStorage.removeItem('token_access');
        }
    }

    const changeComplaints = (view) => {
        setLoggedUserView(view)
    }

    return (
        <AppContext.Provider value={{
            loginPage, 
            changeView,
            isUserLogged,
            logUser,
            loggedUserView,
            changeComplaints,
            handleClose,
            isModalOpen,
            cancelClose
        }}>
            {children}
        </AppContext.Provider>
    );
};

export { ChangeUserView, AppContext };
import React from 'react'

const AppContext = React.createContext();

function ChangeUserView({ children }) {
    const [loginPage, setLoginPage] = React.useState(true);

    const changeView = () => {
        setLoginPage(!loginPage);
    }

    return (
        <AppContext.Provider value={{loginPage, changeView}}>
            {children}
        </AppContext.Provider>
    );
};

export { ChangeUserView, AppContext };
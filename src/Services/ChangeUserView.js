import React from 'react'

const AppContext = React.createContext();

function changeUserView() {
    const [loginPage, setLoginPage] = React.useState(true);

    const changeView = () => {
        setLoginPage(!loginPage);
    }

    return (
        <AppContext.Provider value={{changeView}}>
            {children}
        </AppContext.Provider>
    );
};

export { changeUserView };
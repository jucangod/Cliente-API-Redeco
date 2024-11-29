const signUp = ({ user, password, key }) => {
  if (user == 'test' && password == 123 && key == 123)
    return {
      message: 'Autenticación exitosa',
      user: {
        username: 'test',
        token_access: 'token',
      },
    };
  else throw new Error('Error en el registro');
};

export { signUp };


// import React from "react";
// import { AppContext } from '../Services/ChangeUserView';

// const SignUpContext = React.createContext()

// function SignUp({ children }) {
//     const {changeView} = React.useContext(AppContext);
//     const [password, setPassword] = React.useState('');
//     const [confirmPassword, setConfirmPassword] = React.useState('');
//     const [user, setUser] = React.useState('');
//     const [key, setKey] = React.useState('');
//     const [error, setError] = React.useState('');
//     const [success, setSuccess] = React.useState('');
//     const usersDatabase = JSON.parse(localStorage.getItem('users')) || [];

//     const createUser = () => {
//         if (!user || !password || !key || !confirmPassword) {
//             setError('Todos los campos son obligatorios');
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError('Las contraseñas no coinciden');
//             return;
//         }

//         const userExists = usersDatabase.some(u => u.username === user);
//         if (userExists) {
//             setError('El usuario ya existe');
//             return;
//         }

//         const newUser = {
//             username: user,
//             password: password,
//             key: key
//         };

//         usersDatabase.push(newUser);
//         localStorage.setItem('users', JSON.stringify(usersDatabase));
//         setError('');

//         setSuccess('Usuario registrado con éxito');
//         setTimeout(() => {
//             setUser('');
//             changeView(); // Cambiar a la vista de login
//         }, 2000);
//     }

//     return (
//         <SignUpContext.Provider value={{
//             createUser,
//             setKey,
//             setPassword,
//             setUser,
//             setConfirmPassword,
//             error,
//             success
//         }}>
//             { children }
//         </SignUpContext.Provider>
//     )
// };

// export { SignUp, SignUpContext };
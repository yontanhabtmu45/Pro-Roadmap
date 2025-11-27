// Import React  and the Hooks we need here
import React, { createContext, useState, useEffect } from 'react';
//  import util function we created to handle the reading from local storgage
import getAuth from '../util/auth';
// Create the AuthContext
const AuthContext = React.createContext();
// create a custom hook to use the AuthContext
export const useAuth = () => {
    return React.useContext(AuthContext);
}
// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const value = { auth, setAuth, isLogged, setIsLogged, isAdmin, setIsAdmin };
     

    // useEffect to load the auth data from localstorage when the component mounts
    useEffect(() => {
        // Retrieve login data from local storage
        const fetchAuthData = async () => {
            const authData = await getAuth();
            if (authData && authData.admin_token) {
                setAuth(authData);
                setIsLogged(true);
                setIsAdmin(true);
            } else {
                setAuth({});
                setIsLogged(false);
                setIsAdmin(false);
            }
        };
        fetchAuthData();
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
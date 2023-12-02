import { useState } from "react";


export const useAuth = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const login = () => {
        localStorage.setItem('loggedIn', "true");
        setLoggedIn(true)
    }
    const logout = () => {
        localStorage.removeItem('loggedIn');
        setLoggedIn(false)
    };

    const isUserLoggedIn = () => {
        const loggedInValue = localStorage.getItem('loggedIn');
        setLoggedIn(loggedInValue !== null && loggedInValue === 'true')
    };



    return { loggedIn, setLoggedIn, logout, isUserLoggedIn, login };
};
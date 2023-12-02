// Example usage in a component

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LogoutButton = () => {
    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/")
    };


    return (
        <button className="text-light green" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;

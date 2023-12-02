// Sidebar.tsx

import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./SideBar.css";
import LogoutButton from '../Signout/Signout';
import { useAuth } from '../../context/AuthContext';
// import { AuthContext } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
    const location = useLocation();
    // const loggedIn = useContext(AuthContext);
    // const { loggedIn, setLoggedIn } = useContext(AuthContext);

    const { isLoggedIn, setIsLoggedIn } = useAuth()
    return (
        <>
            {isLoggedIn && <div className="l-navbar rounded-right" id="nav-bar">
                <nav className="nav">
                    <div>
                        <div className="nav_list">
                            <Link to="/dashboard" className={`nav_link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
                                Dashboard
                            </Link>
                            <Link to="/employees" className={`nav_link ${location.pathname === '/employees' ? 'active' : ''}`}>
                                <span className="nav_name">Employees</span>
                            </Link>
                            <Link to="/upload" className={`nav_link ${location.pathname === '/upload' ? 'active' : ''}`}>
                                <span className="nav_name">Upload File</span>
                            </Link>
                        </div>
                    </div>
                    <LogoutButton />
                </nav>
            </div>}
        </>
    );
};

export default Sidebar;

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div >
                <Link className="navbar-option" to='dashboard'>Dashboard</Link>
                <Link className="navbar-option" to='guest'>Guest</Link>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';

import kit from "./kit.jpg";

import { NavLink } from 'react-router-dom';

// import akji from "./akji.jpg";

const Navbar = () => {
    return (
        <>
            <div className="bar">

                <div className="logo">
                    <img src={kit} alt="pic" />
                </div>

                <div className="viru">
                <ul class="nav justify-content-end">
                <li className="nav-item">
                    <NavLink exact className="nav-link active" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                </li>
                </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
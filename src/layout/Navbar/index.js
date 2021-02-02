import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';
import myLogo from './myLogo.png';

const Navbar = () => {
    return (
        <nav id="navbar" class="navbar navbar-expand-sm fixed-top">
            <NavLink to='/'>
                <img id="myLogo" src={myLogo} alt="Logo" />
            </NavLink>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <NavLink to='/about' class="nav-link" > About Me </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink to='/projects' class="nav-link" > My Projects </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
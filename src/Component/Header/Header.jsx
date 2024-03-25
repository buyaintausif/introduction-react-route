import React from 'react';
import '../Header/header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div  >
            <ul  className='header'>

                <NavLink to="/">HOme</NavLink>
                <NavLink to="/about">About</NavLink>

                <NavLink to="/contact" >Contact</NavLink>
                <NavLink to="/users">Users</NavLink>

                <NavLink to="/posts"> Posts</NavLink>
               
            </ul>
        </div>
    );
};

export default Header;
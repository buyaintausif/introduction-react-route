import React from 'react';
import '../Header/header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div  >
            <ul  className='header'>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>

                <Link to="/posts">Posts</Link>
               
            </ul>
        </div>
    );
};

export default Header;
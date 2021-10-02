import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Navbar = () => {
    return(
        <ul>
            <li>
                <Link to="/">Home Page</Link>
                <Link to="/polls">Polls</Link>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
}
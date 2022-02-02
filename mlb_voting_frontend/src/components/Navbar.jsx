import React from 'react';

import { Nav, NavLink, NavMenu} from './styled-component/Navbar.style'


export const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>MLB Voting App</h1>
                </NavLink>
                <NavMenu>
                    <NavLink exact to="/" activeStyle>Home</NavLink>
                    <NavLink to="/polls" activeStyle>Polls</NavLink>
                    <NavLink to="/topplayers" activeStyle>Top Players</NavLink>
                    <NavLink to="/about" activeStyle>About</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Poll App</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/poll" activeStyle>
                        Poll
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

// export const Navbar = () => {
   

//     return(
//         <nav>
//             <label class="logo">MLB Poll App</label>
//             <ul>
//                 <li><Link to="/">Home Page</Link></li>
//                 <li><Link to="/polls">Polls</Link></li>
//                 <li></li>
//             </ul>
//         </nav>





        // <ul>
        //     <li>
        //         <Link to="/">Home Page</Link>
        //         <Link to="/polls">Polls</Link>
        //         <Link to="/about">About</Link>
        //     </li>
        // </ul>
//     )
// }
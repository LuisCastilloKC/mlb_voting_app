import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem cal((100vw - 1000px) / 2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24;

    @media screen and (max-width: 768) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`


// const Navbar = styled.nav`
//     *{
//         padding: 0;
//         margin: 0;
//         text-decoration: none;
//         list-style: none;
//         box-sizing: border-box;
//     }
//     body{
//         font-family: montserrat;
//     }

//     nav{
//         background: #0082e6;
//         height: 80px;
//         width: 100%;
//     }
//     label.logo{
//         color: white;
//         font-size: 35px;
//         line-height: 80px;
//         padding: 0 100px;
//         font-weight: bold;
//     }
//     nav ul{
//         float: right;
//         margin-right: 20px;
//     }
//     nav ul li{
//         display: inline-block;
//         line-height: 80px;
//     }

// `
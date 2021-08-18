import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
//import { useDispatch } from 'react-redux';

const NavLink = ({ open }) => {

    const { pathname } = useLocation();
    return (
        <Ulstyled open={open}>
            <li>
                <Link to="/">Home</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "35%" : "0%" }} />
            </li>
            <li>
                <Link to="/about">About</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/about" ? "35%" : "0%" }} />
            </li>
            <li>
                <Link to="/upcomming">Upcomming</Link>
                <Line transition={{ duration: 1, ease: "easeOut" }} initial={{ width: "0%" }} animate={{ width: pathname === "/upcomming" ? "35%" : "0%" }} />
            </li>

        </Ulstyled>);
}

const Ulstyled = styled.ul` 
display: flex;
list-style: none;
justify-content: space-around;
li{
    padding-left:5rem;
    position: relative;
    font-family: 'Bebas Neue', cursive;
}
form{
    padding-left:5rem;
}
input{
    padding: 0.2rem 2rem;
    background: #31294e;
    border: none;
    color: white;
}
@media (max-width: 1024px){
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background:#1c1b29;;
    position: fixed;
    top:0%;
    right: 0%;
    transform:${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    transition: ${({ open }) => open ? 'all 0.75s ease' : ''}; 
}
    

`;
const Line = styled(motion.div)`
height: 0.3rem;
background: #23d997;
width:35%;
position: absolute;
bottom: -50%;
left: 70%;
@media (max-width: 1024px){
display: none;
}
`

export default NavLink;
import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Burger from './Burgur';

const Navbar = () => {



    return (
        <Navstyled>
            <Link to='/'><h1>Movie Hub</h1></Link>
            <Burger />
        </Navstyled>
    );
}

const Navstyled = styled(motion.div)`
min-height: 10vh;
display:flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 0rem 3rem;
background: #1c1b29;;
position: sticky;
top: 0%;
z-index:10;
a{
    color: white;
    text-decoration: none;
}
@media (max-width: 1024px) {
   h1{
       font-size: 2rem;
   }
  }
`;

export default Navbar;
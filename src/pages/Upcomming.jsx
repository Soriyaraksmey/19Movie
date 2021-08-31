import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
//import { titleAnim, titleAnim1, fade } from '../components/Animatio'


const Upcomming = () => {


    return (
        <Styling>
            <h3>This page will be available soon</h3>
        </Styling>
    );
}

const Styling = styled(motion.div)`
padding: 6rem 3rem;
margin: auto;
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;




export default Upcomming;
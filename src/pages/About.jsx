import React from 'react'
import { motion } from 'framer-motion';
import { titleAnim, titleAnim1, fade } from '../components/Animatio'
import styled from 'styled-components';


const About = () => {
    return (
        <AboutStyledv>
            <motion.h1 variants={titleAnim} initial="hidden" animate="show">Hi, I'm Soriya</motion.h1>
            <motion.h4 variants={titleAnim1} initial="hidden" animate="show">Movies App inspire by youtube</motion.h4>
            <motion.p variants={fade} initial="hidden" animate="show">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos autem tempore, totam enim dolorem magni repellendus, repudiandae aliquid nihil eos nam</motion.p>
            <motion.p variants={fade} initial="hidden" animate="show">Contact me: +8850965059392</motion.p>
        </AboutStyledv>
    );
}

const AboutStyledv = styled(motion.div)`
padding: 6rem 3rem;
width: 50%;
margin: auto;
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h4{
    padding: 2rem 0rem;
}
`



export default About;
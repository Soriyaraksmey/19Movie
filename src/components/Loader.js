import React from 'react';
import { motion, useCycle } from "framer-motion";
import styled from 'styled-components';


const loaderVaraints = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    },
    animationTwo: {
        x: 0,
        y: [0, -30],
        transition: {
            y: {
                repeat: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

const Loader = () => {

    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <>
            <Cirlestyle
                variants={loaderVaraints}
                animate={animation}
            >
            </Cirlestyle>
            <span onClick={() => cycleAnimation()}>Click to change loder style</span>
        </>
    );
}

const Cirlestyle = styled(motion.div)`
width: 10px;
  height: 10px;
  margin: 40px auto;
  border-radius: 50%;
  background: white;
`

export default Loader;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

const MovieDetails = () => {

    const history = useHistory();

    const Closecomponent = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push("/");
        }
    }


    return (
        <Cardshaow className="shadow" onClick={Closecomponent}>
            <Cardmain>
                <h1>Movie detals</h1>
            </Cardmain>
        </Cardshaow>
    );
}

const Cardshaow = styled(motion.div)`
min-height: 100vh;
width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left: 0;
  cursor: pointer;
  z-index: 6;
`

const Cardmain = styled(motion.div)`
  width: 80%;
  min-height: 100vh;
  border-radius: 1rem;
  padding:  2rem 5rem;
  background: #151320;
  position: absolute;
  left: 10%;
  color: black;
  cursor: auto;
  z-index: 7;
  h1{
      color: white;
  }
  `
export default MovieDetails;
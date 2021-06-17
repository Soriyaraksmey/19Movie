import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Movie = ({ img, title, title1 }) => {

    //for good quality img
    //const poster = "https://image.tmdb.org/t/p/original" + img;
    //lower quality
    const poster = "https://image.tmdb.org/t/p/w342" + img;


    return (
        <GameStyled>
            <img src={poster} alt="title" />
            <h3>{title || title1}</h3>
        </GameStyled>
    );
}

const GameStyled = styled(motion.div)`

  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0,0,0,0.18);
  background: #1c1b29;
  cursor: pointer;
  transition: transform .3s;
  &:hover{
      transform: scale(1.1);
      box-shadow: 0 0 30px rgba(0,0,0,0.5);
  }
  img{
    width: 100%;
    display: block;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    }
h3{
    color: white;
    padding: 1rem 0rem;
    font-size: 0.9rem;
}

`



export default Movie;
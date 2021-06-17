import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../components/movie';
import { LoadMovies } from '../redux/actions/laodmovieaction'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Homepage = () => {

    const dispact = useDispatch();
    useEffect(() => {
        dispact(LoadMovies())
    }, [dispact])

    const { LastestMovie, Trandings, Tvshows } = useSelector(state => state.Movies);

    return (
        <MovieList>
            <h2>Trending</h2>
            <MovieStyled>
                {
                    Trandings.map((m) => (
                        <Movie key={m.id} img={m.poster_path} title={m.original_title} title1={m.original_name} />
                    ))
                }

            </MovieStyled>
            <h2>Lastest Movie</h2>
            <MovieStyled>
                {
                    LastestMovie.map((m) => (
                        <Movie key={m.id} img={m.poster_path} title={m.original_title} />
                    ))
                }
            </MovieStyled>
            <h2>Lastest Tv shows</h2>
            <MovieStyled>
                {
                    Tvshows.map((m) => (
                        <Movie key={m.id} img={m.poster_path} title={m.original_name} />
                    ))
                }
            </MovieStyled>
        </MovieList>


    );
}
const MovieList = styled(motion.div)`
padding: 0rem 3rem;
h2{
    padding: 3rem 0rem;
}
`;
const MovieStyled = styled(motion.div)`
min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;




export default Homepage;
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux'
//component
import { LoadMovies } from '../redux/actions/laodmovieaction';
import MovieDetails from '../components/moviedetails';
import Movie from '../components/movie';
//style
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';


const Homepage = () => {

    const dispact = useDispatch();
    useEffect(() => {
        dispact(LoadMovies())
    }, [dispact])

    //get data from redux
    const { LastestMovie, Trandings, Tvshows } = useSelector(state => state.Movies);

    //check if url changed
    const location = useLocation();
    const pathID = location.pathname.split("/")[2]; //get movie id from path

    return (
        <MovieList>
            <AnimateSharedLayout>
                {pathID && <MovieDetails />}
                <h2>Trending</h2>
                <MovieStyled>
                    {
                        Trandings.map((m) => (
                            <Movie key={m.id} img={m.poster_path} title={m.original_title} title1={m.original_name} id={m.id} />
                        ))
                    }

                </MovieStyled>
                <h2>Lastest Movie</h2>
                <MovieStyled>
                    {
                        LastestMovie.map((m) => (
                            <Movie key={m.id} img={m.poster_path} title={m.original_title} id={m.id} />
                        ))
                    }
                </MovieStyled>
                <h2>Lastest Tv shows</h2>
                <MovieStyled>
                    {
                        Tvshows.map((m) => (
                            <Movie key={m.id} img={m.poster_path} title={m.original_name} id={m.id} />
                        ))
                    }
                </MovieStyled>
            </AnimateSharedLayout>
        </MovieList>


    );
}
const MovieList = styled(motion.div)`
padding: 6rem 3rem;
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
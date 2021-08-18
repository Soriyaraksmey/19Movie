import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Movie from '../components/movie';


const Search = () => {

    const { Search } = useSelector(state => state.Search)

    return (
        <AboutStyledv>
            <h4>result you search for:</h4>
            <MovieStyled>
                {
                    Search.map((m) => (
                        <Movie key={m.id} img={m.poster_path} title={m.original_title} title1={m.original_name} id={m.id} />
                    ))
                }

            </MovieStyled>
        </AboutStyledv>
    );
}
const AboutStyledv = styled(motion.div)`
padding: 6rem 3rem;

`
const MovieStyled = styled(motion.div)`
min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;


export default Search;
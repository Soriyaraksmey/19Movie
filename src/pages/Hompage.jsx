import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux'
//component
import { LoadMovies } from '../redux/actions/laodmovieaction';
import MovieDetails from '../components/moviedetails';
import Movie from '../components/movie';
import { SerachMovies } from '../redux/actions/searchmovieaction';
//style
import styled from 'styled-components';
import { motion, AnimateSharedLayout } from 'framer-motion';


const Homepage = () => {

    const dispact = useDispatch();
    useEffect(() => {
        dispact(LoadMovies())
        dispact({ type: 'CLEAR_SEARCH' });
    }, [dispact])

    //search
    const [text, Settext] = useState('');

    const dispatch = useDispatch();
    const searchMovie = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(SerachMovies(text));
            Settext("");
        } else {
            alert("pleas enter movie name to search guys");
        }
    }

    //get data from redux
    const { LastestMovie, Trandings, Tvshows } = useSelector(state => state.Movies);
    const { Search } = useSelector(state => state.Search)


    //check if url changed
    const location = useLocation();
    const pathID = location.pathname.split("/")[2]; //get movie id from path


    return (
        <MovieList>
            <AnimateSharedLayout>
                <Formstyled>
                    <form onSubmit={searchMovie}>
                        <input type="text" value={text} placeholder="search movies " onChange={event => Settext(event.target.value)} />
                        <button type="submit">search</button>
                    </form>
                </Formstyled>

                {pathID && <MovieDetails />}
                {
                    Search.length > 0 ?
                        (<> <h2>result you search for:</h2>
                            <MovieStyled>
                                {
                                    Search.map((m) => (
                                        <Movie key={m.id} img={m.poster_path} title={m.original_title} title1={m.original_name} id={m.id} />
                                    ))
                                }

                            </MovieStyled></>) : ""
                }
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
padding: 3rem 3rem;
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
  ${({ active }) => active && `
    display: flex;
  `}
  @media (max-width: 530px) {
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  }
`;

const Formstyled = styled(motion.div)`
width: 100%;
display: flex;
justify-content: center;
input{
    padding: 0.5rem 5rem;
    border: none;
    background: #e6e5e5;
    border-radius: 25px;
}
button{
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
}
@media (max-width: 1024px) {
    input{
    padding: 0.5rem 3rem;
    border: none;
    background: #e6e5e5;
    border-radius: 25px;
}
button{
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
}
  }
  @media (max-width: 530px) {
    input{
    padding: 0.5rem 1rem;
    border: none;
    background: #e6e5e5;
    border-radius: 25px;
}
  }
`;



export default Homepage;
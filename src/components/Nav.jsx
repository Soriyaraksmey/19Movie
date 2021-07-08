import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { SerachMovies } from '../redux/actions/searchmovieaction';

const Navbar = () => {

    const [text, Settext] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const searchMovie = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(SerachMovies(text));
            history.push(`/search/${text}`);
        } else {
            alert("pleas enter movie name to search guys");
        }
    }

    return (
        <Navstyled>
            <Container>
                <h1>えいが</h1>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to="/upcomming" style={{ textDecoration: 'none' }}><li>Fixing</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
                </ul>
                <form onSubmit={searchMovie}>
                    <input type="text" value={text} onChange={event => Settext(event.target.value)} />
                    <button type="submit">search</button>
                </form>
            </Container>
        </Navstyled>
    );
}

const Navstyled = styled(motion.div)`
width: 100%;
min-height: 5vh;
background: #262238;
position: fixed;
top: 0;
left: 0;
z-index: 2;
`
const Container = styled(motion.div)`
padding: 0rem 3rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
color: white;
ul{
    display: flex;
}
li{
    padding: 0rem 3rem;
}
input{
    padding: 0.2rem 2rem;
    background: #31294e;
    border: none;
    color: white;
}

`

export default Navbar;
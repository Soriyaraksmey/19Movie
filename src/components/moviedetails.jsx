import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';
//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//img
import emptystar from '../img/star-empty.png';
import startfull from '../img/star-full.png';
//component
import Movie from "./movie";
import Loader from './Loader';

const MovieDetails = () => {

    const history = useHistory();
    //get data from state
    const { details, video, img, similar, isLoading } = useSelector(state => state.Moviesdetail);

    const dispatch = useDispatch();
    const Closecomponent = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            history.push("/");
            dispatch({ type: "CLEAR_STATE" });
        }
    }
    //render star
    const getStars = () => {
        let stars = [];
        const rating = Math.floor(details.vote_average / 2);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={startfull} alt={`start${i}`} key={i}></img>)
            } else {
                stars.push(<img src={emptystar} alt={`start${i}`} key={i}></img>)
            }
        }
        return stars;
    }
    //img url
    const poster = "https://image.tmdb.org/t/p/w342" + details.poster_path;


    if (isLoading) {
        return (
            <Cardshaow className="shadow" onClick={Closecomponent}>
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            </Cardshaow>
        );
    } else {
        return (
            <Cardshaow className="shadow" onClick={Closecomponent}>
                <Cardmain>
                    <Container>
                        <Poster>
                            <img src={`${poster}`} alt={`${details.poster_path}`} />
                            <Rating>
                                <p>{`${details.vote_average}`}\&#49;&#48;</p>
                                <Stars>
                                    {getStars()}
                                </Stars>
                            </Rating>
                        </Poster>
                        <div className="Moviedetail">
                            <Titlestyled>
                                <h3>{`${details.title}`}</h3>
                                <p>Genres: {details.genres.length > 0 ? details.genres.map(genre => (`${genre.name} `)) : ``}</p>
                            </Titlestyled>
                            <Detailsstyled>
                                <div className="section-1">
                                    <p>Released: {details.release_date}</p>
                                    <p>Production: {details.production_companies.map(company => (`${company.name}, `))}</p>
                                    <p>Status: {details.status}</p>
                                    <p>Offical website: <a href={`${details.homepage}`} target="_blank" rel="noopener noreferrer">go to offical website</a></p>
                                </div>
                                <div className="section-2">
                                    <p>Duration: {details.runtime} min</p>
                                    <p>Country: {details.production_countries.map(country => country.name)}</p>
                                    <p>Language: {details.spoken_languages.map(language => language.english_name)}</p>
                                </div>
                            </Detailsstyled>
                        </div>
                    </Container>
                    {
                        video.results.length === 0 ? `` : (<VideoTriler>
                            <iframe width="100%" height="400"
                                src={`https://www.youtube.com/embed/${video.results[0].key} `} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </VideoTriler>)
                    }
                    <OverviewStyle>
                        <h3>Overview</h3>
                        <span></span>
                        <p>{details.overview}</p>
                    </OverviewStyle>
                    <Imgstyle>
                        {img.backdrops.slice(0, 3).map(backdrop => (
                            <img key={`${backdrop.file_path}`} src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`} alt={backdrop.file_path} />
                        ))}
                    </Imgstyle>
                    {similar.results.length > 0 ? <Similarstyle>
                        <h3>You may also like</h3>
                        <MovieStyled>
                            {similar.results.map(r => (
                                <Movie key={r.id} img={r.poster_path} title={r.title} id={r.id} />
                            ))}
                        </MovieStyled>
                    </Similarstyle> : ``}
                </Cardmain>
            </Cardshaow>


        );
    }
}


const Cardshaow = styled(motion.div)`
min-height: 100vh;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:0;
  left: 0;
  cursor: pointer;
  z-index: 6;
`
const LoaderContainer = styled(motion.div)`
  width: 80%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  padding:  2rem 3rem;
  background: #151320;
  position: absolute;
  left: 10%;
  color: #ffffff;
  cursor: auto;
  z-index: 7;
`

const Cardmain = styled(motion.div)`
  width: 80%;
  min-height: 100vh;
  border-radius: 1rem;
  padding:  2rem 3rem;
  padding-top: 4rem;
  background: #151320;
  position: absolute;
  left: 10%;
  color: #ffffff;
  cursor: auto;
  z-index: 7;
  h1{
      color: white;
  }p{
      color: #b3b3b3;
  }
  `
const VideoTriler = styled(motion.div)`
 padding-top: 3rem;

 `
const Container = styled(motion.div)`
width: 100%;
min-height: 40vh;
border-radius: 1rem;
padding:  2rem 2rem;
background: #262238;
display: grid;
grid-template-columns: 220px 1fr;
grid-gap: 5rem;
color: white;
@media (max-width: 1024px) {
   display: block;
}
`
const Poster = styled(motion.div)`
img{
    max-width: 100%;
    height: auto;
    border-radius: 10%;
    object-fit: cover;
    }
@media (max-width: 1024px) {
  img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  }
}
@media (max-width: 650px) {
  img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  }
}
`
const Rating = styled(motion.div)`
 display: flex;
 justify-content: space-between;
 align-items: center;
 @media (max-width: 650px) {
    width: 100%;
}

`
const Stars = styled(motion.div)`
 display: flex;
 img{
    width: 100%;
    object-fit: cover;
    }

`

const Titlestyled = styled(motion.div)`
 padding: 2rem 0rem;
 h3{
     font-size: 2.1rem;
     font-weight: bold;
     padding-bottom: 10px;
 }
`
const Detailsstyled = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
 grid-gap: 5rem;
 p{
     padding: 0.5rem 0rem;
 }
 @media (max-width: 650px) {
    grid-gap: 0rem;
}
`
const OverviewStyle = styled(motion.div)`
color: white;
padding: 3rem 0rem;
p{
    padding: 3rem 0rem;
}
`
const Imgstyle = styled(motion.div)`
 img{
     width: 100%;
     object-fit: cover;
 }

`;
const Similarstyle = styled(motion.div)`
padding: 3rem 0rem;
h3{
    padding-bottom: 3rem;
}
`
const MovieStyled = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;


export default MovieDetails;
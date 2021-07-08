import axios from 'axios';
import { SearchMovieUrl } from '../../api';


export const SerachMovies = (movie_name) => async (dispatch) => {

    const respone = await axios.get(SearchMovieUrl(movie_name));
    console.log(respone.data.results);
    dispatch({
        type: 'SEARCH_MOVIE',
        payload: {
            searchmovie: respone.data.results,
        }
    })

};
import axios from 'axios';
import { LastestMovieURL, TrandingMovieUrl, TvShowUrl } from '../../api';


export const LoadMovies = () => async (dispatch) => {

    const respone = await axios.get(LastestMovieURL(), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });

    const respone1 = await axios.get(TrandingMovieUrl(), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });
    const respone2 = await axios.get(TvShowUrl(), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });

    dispatch({
        type: 'FETCH_DATA',
        payload: {
            LastestMovie: respone.data.results,
            Trandings: respone1.data.results,
            Tvshows: respone2.data.results,
        }
    })

};
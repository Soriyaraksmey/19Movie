import axios from 'axios';
import { GetDetailUrl, GetImgUrl, GetVideoUrl, GetsimilarMovieUrl } from '../../api';

export const GetmovieDetails = (movie_id) => async (dispatch) => {
    console.log(movie_id);

    const respone = await axios.get(GetDetailUrl(movie_id), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });

    const respone1 = await axios.get(GetVideoUrl(movie_id), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });
    const respone2 = await axios.get(GetImgUrl(movie_id), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });
    const respone3 = await axios.get(GetsimilarMovieUrl(movie_id), {
        params: {
            api_key: process.env.REACT_APP_API_KEY,
        },
    });

    dispatch({
        type: "GET_MOVIE_DETAIL",
        payload: {
            details: respone.data,
            video: respone1.data,
            img: respone2.data,
            similar: respone3.data,
        }
    })
};
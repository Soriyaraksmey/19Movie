import { combineReducers } from 'redux';
import MovieDetailReducer from './moviedetailReducer';
import MoviesReducer from './moviesReducer';
import SearchMovieReducer from './searchmovieReducer';

export const rootReducers = combineReducers({
    Movies: MoviesReducer,
    Moviesdetail: MovieDetailReducer,
    Search: SearchMovieReducer,
});
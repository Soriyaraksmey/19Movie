import { combineReducers } from 'redux';
import MovieDetailReducer from './moviedetailReducer';
import MoviesReducer from './moviesReducer';

export const rootReducers = combineReducers({
    Movies: MoviesReducer,
    Moviesdetail: MovieDetailReducer
});
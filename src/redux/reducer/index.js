import { combineReducers } from 'redux';
import MoviesReducer from './moviesReducer';

export const rootReducers = combineReducers({
    Movies: MoviesReducer
});
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import MovieDetailReducer from './movieDetailReducer';
import movieTrailerReducer from './movieTrailerReducer';

const rootReducer = combineReducers({
    moviesReducer,
    MovieDetailReducer,
    movieTrailerReducer
})

export default rootReducer;
import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import MovieDetailReducer from './movieDetailReducer';
import movieTrailerReducer from './movieTrailerReducer';
import movieCategoriesReducer from './moviesCategoriesReducer';

const rootReducer = combineReducers({
    moviesReducer,
    MovieDetailReducer,
    movieTrailerReducer,
    movieCategoriesReducer,
})

export default rootReducer;
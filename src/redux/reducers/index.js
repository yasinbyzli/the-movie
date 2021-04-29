import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import MovieDetailReducer from './movieDetailReducer';


const rootReducer = combineReducers({
    moviesReducer,
    MovieDetailReducer
})

export default rootReducer;
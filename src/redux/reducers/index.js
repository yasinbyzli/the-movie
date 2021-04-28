import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer'

const rootReducer = combineReducers({
    moviesReducer
})

export default rootReducer;
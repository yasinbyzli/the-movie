import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

const getMoviesReducer = (state = initialState.movies, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_SUCCESS:
            console.log(action.payload);
            break;
    
        default:
            return state;
    }
}

export default getMoviesReducer;
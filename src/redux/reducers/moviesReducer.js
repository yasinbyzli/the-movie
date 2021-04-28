import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function getMoviesReducer  (state = initialState.movies, action)  {
    switch (action.type) {
        case actionTypes.GET_MOVIES_SUCCESS:
            return action.payload
        default:
            return state;
    }
}


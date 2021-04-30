import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export default function currentMovieTrailer(state = initialState.currentMovieTrailer, action){
    switch (action.type) {
        case actionTypes.GET_TRAILER_SUCCESS:
            return action.payload
        default:
            return state
    }
}
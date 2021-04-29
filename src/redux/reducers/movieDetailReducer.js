import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function(state = initialState.currentMovie, action) {
    switch (action.type) {
        case actionTypes.CURRENT_MOVIES:
            return action.payload;
    
        default:
            return state;
    }
}
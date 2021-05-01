import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function getCategories(state = initialState.categories, action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload
    
        default:
            return state
    }
}
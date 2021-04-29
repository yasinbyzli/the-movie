import * as actionTypes from './actionTypes'

export function currentMovie(movieId) {
    return { type : actionTypes.CURRENT_MOVIES, payload : movieId}
}
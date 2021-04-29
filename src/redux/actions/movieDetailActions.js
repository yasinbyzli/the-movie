import * as actionTypes from './actionTypes'

export function currentMovie(movie) {
    return { type : actionTypes.CURRENT_MOVIES, payload : movie}
}
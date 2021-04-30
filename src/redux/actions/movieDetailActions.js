import * as actionTypes from "./actionTypes";

export function currentMovie(movie) {
  return { type: actionTypes.CURRENT_MOVIES, payload: movie };
}

export function getTrailerSuccess(movie) {
  return { type: actionTypes.GET_TRAILER_SUCCESS, payload: movie };
}

export function getTrailer(id) {
  return function (dispatch) {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dc54b89eb57a739ed03f112e8bfeb95b&language=en-US
        `;
    return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getTrailerSuccess(result)))
  };
}

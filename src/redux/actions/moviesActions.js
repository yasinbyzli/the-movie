import * as actionTypes from './actionTypes'

export function getMoviesSuccess(movies){
    return { type : actionTypes.GET_MOVIES_SUCCESS, payload : movies.results}
}

export function getMovies(){
    return function(dispatch) {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=dc54b89eb57a739ed03f112e8bfeb95b&language=tr-TR&page=1"
        return fetch(url)
                .then(response => response.json())
                .then(result => dispatch(getMoviesSuccess(result)))
    }
}
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as moviesActions from "../redux/actions/moviesActions";
import MovieItem from "./MovieItem";
import '../sass/_movie.scss'

function MovieList({ movies, actions }) {

  useEffect(() => {
      actions.getMovies()
  }, [])

  console.log(movies)

  return (
    <div className="row movie-list">
      {movies.map((movie) => (
        <MovieItem 
            key = {movie.id}
            title = {movie.original_title}
            overview = {movie.overview}
            image = {movie.poster_path}
            vote_average = {movie.vote_average}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getMovies: bindActionCreators(moviesActions.getMovies, dispatch)
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

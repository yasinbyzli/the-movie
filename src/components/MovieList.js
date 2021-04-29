import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as moviesActions from "../redux/actions/moviesActions";
import MovieItem from "./MovieItem";
import '../sass/_movie.scss'
import ContentLoader from 'react-content-loader'

function MovieList({ movies, actions }) {

  useEffect(() => {
      actions.getMovies()
  }, [])


  return (

    <div className="row movie-list">
      {movies.length === 0 &&
      <div className="d-flex">
        {[...Array(6)].map((x, i) =>
          <ContentLoader viewBox="0 0 500 880" key={i}>
            <rect x="3" y="3" rx="30" ry="30" width="460" height="700" />
            <rect x="6" y="760" rx="0" ry="0" width="292" height="20" />
        </ContentLoader>
        )}
      </div>
    }
      {movies.map((movie) => (
        <MovieItem 
            key = {movie.id}
            title = {movie.original_title}
            image = {movie.poster_path}
            vote_average = {movie.vote_average}
            id = {movie.id}
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

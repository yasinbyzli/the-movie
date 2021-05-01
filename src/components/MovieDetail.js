import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import "../sass/_movie.scss";
import * as movieDetailActions from "../redux/actions/movieDetailActions";
import ReactPlayer from "react-player";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function MovieDetail({ currentMovie, currentMovieTrailer, categories, actions }) {
  
    const { id } = useParams();

  useEffect(() => {
    actions.currentMovieTrailer(currentMovie.id);
  }, []);



  const  key = currentMovieTrailer.results[0].key;

  const category = categories.genres.filter(category => {
      return currentMovie.genre_ids.find(genreId => genreId === category.id);
  })
  
  const [isMute, setIsMute] = useState(false);
  const [isInfo, setIsInfo] = useState(true);

  const handleChangeMute = () => {
      setIsMute(!isMute)
  }

  const handleChangeInfo = () => {
      setIsInfo(!isInfo)
  }

  const date = currentMovie.release_date.split("-")[0];

  return (
    <div className="movie-detail">
      
      <div className="movie-detail__trailer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${key}`}
          loop={true}
          playing={true}
          muted={isMute}
          width="100%"
          height="100%"
        />
      </div>

      <div className={`movie-detail__info ${isInfo ? 'movie-detail__active' : ''}`}>
        
        <div className="movie_image">
          <Link to="/">
            <ArrowBackIcon className="back"></ArrowBackIcon>
          </Link>
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${currentMovie.poster_path}`}
          ></img>
        </div>

        <div className={`movie_info`}>
          <h2 className="movie_info__title">
            {currentMovie.original_title} 
            <span>
                ({date})
            </span>
          </h2>

          <ul className="category">
              {
                  category.map(cate => (
                      <li key={cate.id}> {cate.name}</li>
                  ))
              }
          </ul>

          <div className="movie_info__actions">
            <div className="bar">
              <CircularProgressbar
                className="ml-2"
                value={currentMovie.vote_average * 10}
                text={`${currentMovie.vote_average * 10}%`}
                strokeWidth={6}
                background
                styles={buildStyles({
                  textSize: "30px",
                  backgroundColor: "#000",
                  textColor: "#fff",
                  trailColor: "#fff",
                  fontSize: "12px"
                })}
              />
            </div>
            <div className={`icon ${isMute ? 'icon__active' : ''}`} onClick = {handleChangeMute}>
                <VolumeOffIcon></VolumeOffIcon>
            </div>
            <div className="icon" onClick={handleChangeInfo}>
                <PlayArrowIcon></PlayArrowIcon>
            </div>

          </div>

          <p>
            <h3>Özet</h3>
            {currentMovie.overview}
          </p>
        </div>
      </div>
      <div className={`up ${!isInfo ? 'up_active': ''}`} onClick = {handleChangeInfo}>
                <ArrowUpwardIcon></ArrowUpwardIcon>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentMovie: state.MovieDetailReducer,
    currentMovieTrailer: state.movieTrailerReducer,
    categories : state.movieCategoriesReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      currentMovieTrailer: bindActionCreators(
        movieDetailActions.getTrailer,
        dispatch
      ),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

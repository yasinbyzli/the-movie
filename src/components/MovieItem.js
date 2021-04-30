import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as movieDetailActions from '../redux/actions/movieDetailActions';

function MovieItem({ id, title, image, vote_average, movie, actions}) {
  
  return (
    <div className="col-6 col-md-4 col-lg-2 movie-item mb-4">
      <Link to = {`movie/details/${id}`} onClick={() => actions.changeMovie(movie)}>
      <img
        className="movie-item__image"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image}`}
        alt = {title}
      ></img>
      <div className="movie-item__circular-bar">
        <CircularProgressbar
          className="ml-2"
          value={vote_average * 10}
          text={`${vote_average * 10}%`}
          strokeWidth={6}
          background
          styles={buildStyles({
            textSize: "30px",
            backgroundColor: "#000",
            textColor: "#fff",
            trailColor: "#fff",
            fontSize: "12px",
          })}
        />
      </div>
      </Link>
      <h2 className="movie-item__title">{title}</h2>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions : {
      changeMovie : bindActionCreators(movieDetailActions.currentMovie, dispatch)
    }
  }
}

export default connect(null,mapDispatchToProps)(MovieItem);
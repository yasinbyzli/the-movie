import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieItem({ title, overview, image, vote_average }) {
  return (
    <div className="col-6 col-md-4 col-lg-2 movie-item mb-4">
      <img
        className="movie-item__image"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image}`}
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
      <h2 className="movie-item__title">{title}</h2>
    </div>
  );
}

export default MovieItem;

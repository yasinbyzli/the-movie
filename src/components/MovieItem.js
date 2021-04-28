import React from 'react'

function MovieItem({title, overview, image, vote_average}) {
    return (
        <div className="col-6 col-md-4 col-lg-2 movie-item mb-4">
            <img className="movie-item__image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image}`}></img>
            <h2 className="movie-item__title">{title}</h2>
        </div>
    )
}

export default MovieItem

import React from 'react'
import {useParams} from 'react-router-dom';
import '../sass/_movie.scss';

function MovieDetail() {

    const { id } = useParams();

    return (
        <div className="movie-detail">
                {id}
        </div>
    )
}

export default MovieDetail

import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../sass/_movie.scss';
import * as movieDetailActions from '../redux/actions/movieDetailActions';

function MovieDetail({currentMovie, currentMovieTrailer, actions}) {

    const { id } = useParams();
    
    useEffect(() => {
        actions.currentMovieTrailer(id);
    }, [])

    console.log(currentMovieTrailer)

    return (
        <div className="movie-detail">
                
        </div>
    )
}


const mapStateToProps = (state) =>  {
    return { 
        currentMovie : state.MovieDetailReducer,
        currentMovieTrailer : state.movieTrailerReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions : {
            currentMovieTrailer : bindActionCreators(movieDetailActions.getTrailer, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)

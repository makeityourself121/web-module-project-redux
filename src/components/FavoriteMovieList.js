import React from 'react';

import { Link, useParams } from 'react-router-dom';
import {connect} from 'react-redux'
import {toggleFavorites} from '../actions/movieActions'
import {removeFavorites} from '../actions/movieActions'
const FavoriteMovieList = (props) =>{
    // const id = props.favorites
    const favorites = props.favorites;
    console.log(props.favorites)

    // const favorite = props.favorites.find(favorite=>favorite.id===Number(id));
    // console.log(favorite)
    const handleRemove=(id)=>{
        props.removeFavorites(id)
    }

    
    return (<div className="col-xs savedContainer" > 
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={()=>handleRemove(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps=state=>{
    return({
        favorites: state.favoriteReducer.favorites
    })
}

export default connect(mapStateToProps, { removeFavorites})(FavoriteMovieList);
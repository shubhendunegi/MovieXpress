import React, { useContext, useEffect } from 'react'
import MovieFinder from '../api/MovieFinder'
import { MoviesContext } from '../context/MoviesContext'
import StarRating from "./StarRating";

const MovieList = (props) => {
    const {movies, setMovies} = useContext(MoviesContext);
    useEffect(() => {
        const fetchData = async() => {
    try {
        const response = await MovieFinder.get('/')
        setMovies(response.data.data.movies);
    } catch (err) {}
    };
    fetchData();
    }, [])
    
    
    return (
        <div className = "list-group">
            <table className = "table table-hover table-striped table-dark">
                <thead>
                <tr className="table-warning">
                        <th scope = "col">Movie</th>
                        <th scope = "col">Date</th>
                        <th scope = "col">Rating</th>
                        <th scope = "col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {movies && movies.map(movie => {
                        return(
                        <tr key= {movie.id}>
                            <td> {movie.name} </td>
                            <td> {movie.date} </td>
                            <td> <StarRating rating={movie.rating} /></td>
                            <td> {movie.genre} </td>
                        </tr>    
                        )
                    })}

            
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default MovieList

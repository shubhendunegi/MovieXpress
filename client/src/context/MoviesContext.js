import React, { useState, createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = (props) => {
const [movies, setMovies] = useState([]);
const [selectedMovies, setSelectedMovies] = useState(null);

const searchMovies = (movie) => {
    setMovies([...movies, movie]);
};
return (
    <MoviesContext.Provider
    value={{
        movies,
        setMovies,
        searchMovies,
        selectedMovies,
        setSelectedMovies,
    }}
    >
    {props.children}
    </MoviesContext.Provider>
);
};
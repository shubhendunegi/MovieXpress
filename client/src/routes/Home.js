import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'


const Home = () => {
    
    return (
        <div>
            <Header />
            <SearchBar /> 
            <CardList />
            <MovieList />
        </div>
    )
}

export default Home

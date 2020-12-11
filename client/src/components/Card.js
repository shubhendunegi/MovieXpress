import React from 'react'
import StarRating from './StarRating'

export default function Card() {
    return (
        <div className = "card" >
            
            <h4>Movie Title</h4>
            <span>2020</span>
            <div> <StarRating rating={4} /></div>
            <h6>Genre: action, comedy</h6>
        </div>
    )
}



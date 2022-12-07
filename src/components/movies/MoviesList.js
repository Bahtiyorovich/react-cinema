import React from 'react'
import './movies-list.css'
import MovieListItem from '../movies-item/MovieListItem'

export const MoviesList = () => {
  return (
    <div className="movie-list">
        <MovieListItem/>
        <MovieListItem/>
        <MovieListItem/>
        <MovieListItem/>
    </div>
  )
}

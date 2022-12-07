import React from 'react'
import './movies-list.css'
import MovieListItem from '../movies-item/MovieListItem'

export const MoviesList = ({data}) => {
  return (
    <ul className="movie-list">
      {
        data.map(item => {
          return (
            <MovieListItem {...item} key={item.name}/>
          )
        })
      }

    </ul>
  )
}

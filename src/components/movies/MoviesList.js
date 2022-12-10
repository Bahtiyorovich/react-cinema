import React from 'react'
import './movies-list.css'
import MovieListItem from '../movies-item/MovieListItem'

const MoviesList = ({data, onDelete, onToogleActiveIcon}) => {
  return (
    <ul className="movie-list">
      {
        data.map(item => {
          return (
            <MovieListItem 
              {...item} 
              key={item.id} 
              onDelete={() => onDelete(item.id)}
              onToogleActiveIcon={(e) => onToogleActiveIcon(item.id, e.currentTarget.getAttribute('data-toogle'))}
            />
          )
        })
      }

    </ul>
  )
}

export default MoviesList;

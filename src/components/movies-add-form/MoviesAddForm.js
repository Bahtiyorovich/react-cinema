import React from 'react'
import './moviesAddForm.css'


const MoviesAddForm = () => {
  return (
    <div className="movies-add_form">
        <h3>New Add Movies</h3>
        <form className="add-form d-flex">
            <input type="text" className="form-control new-post-label" placeholder="What a movie?"/>
            <input type="number" className="form-control new-post-label" placeholder="How many times it has been viewed?"/>
            <button type="submit"
                className="btn btn-outline-dark"
            >
                Add
            </button>
        </form>
    </div>
  )
}

export default MoviesAddForm
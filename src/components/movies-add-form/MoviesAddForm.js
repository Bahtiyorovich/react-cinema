import { useState, useContext} from "react";
import {Context} from '../../context'


import "./moviesAddForm.css";


const MoviesAddForm = () => {

  const [state, setState] = useState({name: '', views: ''})

  const {_, dispatch} = useContext(Context)



  //   /* Inputdan keladigan ma'lumotni data ga qo'shish funksiyasi */
  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

//   /*Inputni bo'shatish metodi */
  const addFormHandler = e => {
    e.preventDefault();
    if(state.name === ''  || state.views === '') {
      return alert('input empty')
    } 
   const data = {name: state.name, views: state.views}
   dispatch({type: 'ADD_FORM', payload: data})
    setState({ name: '', views: ''})
  }

  return (
          <div className="movies-add_form">
            <h3>New Add Movies</h3>
            <form className="add-form d-flex" onSubmit={addFormHandler}>
              <input
                onChange={changeHandlerInput}
                type="text"
                className="form-control new-post-label"
                placeholder="What a movie?"
                name="name"
                value={state.name}
              />
              <input
                onChange={changeHandlerInput}
                type="number"
                className="form-control new-post-label"
                placeholder="How many times it has been viewed?"
                name="views"
                value={state.views}
              />
              <button type="submit" className="btn btn-outline-dark">
                Add
              </button>
            </form>
          </div>
        );
  }

export default MoviesAddForm;

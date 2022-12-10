import React, { Component } from "react";
import "./moviesAddForm.css";

class MoviesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      views: "",
    };
  }

  /* Inputdan keladigan ma'lumotni data ga qo'shish funksiyasi */
  changeHandlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /*Inputni bo'shatish metodi */
  addFormHandler = e => {
    e.preventDefault();
    this.props.addFormItem({name: this.state.name, views: this.state.views})
    this.setState({
      name: '',
      views: '',
    })
  }
  render() {
    
    const { name, views } = this.state;

    return (
      <div className="movies-add_form">
        <h3>New Add Movies</h3>
        <form className="add-form d-flex" onSubmit={this.addFormHandler}>
          <input
            onChange={this.changeHandlerInput}
            type="text"
            className="form-control new-post-label"
            placeholder="What a movie?"
            name="name"
            value={name}
          />
          <input
            onChange={this.changeHandlerInput}
            type="number"
            className="form-control new-post-label"
            placeholder="How many times it has been viewed?"
            name="views"
            value={views}
          />
          <button type="submit" className="btn btn-outline-dark">
            Add
          </button>
        </form>
      </div>
    );
  }
}

// const MoviesAddForm = () => {
//   return (
//     <div className="movies-add_form">
//         <h3>New Add Movies</h3>
//         <form className="add-form d-flex">
//             <input type="text" className="form-control new-post-label" placeholder="What a movie?"/>
//             <input type="number" className="form-control new-post-label" placeholder="How many times it has been viewed?"/>
//             <button type="submit"
//                 className="btn btn-outline-dark"
//             >
//                 Add
//             </button>
//         </form>
//     </div>
//   )
// }

export default MoviesAddForm;

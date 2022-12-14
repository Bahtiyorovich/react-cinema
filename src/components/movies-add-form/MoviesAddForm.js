import { useState} from "react";
import "./moviesAddForm.css";


const MoviesAddForm = (props) => {

  const [state, setState] = useState({name: '', views: ''})

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
    props.addFormItem({name: state.name, views:  state.views})
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
// class MoviesAddForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       views: "",
//     };
//   }

//   /* Inputdan keladigan ma'lumotni data ga qo'shish funksiyasi */
//   changeHandlerInput = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   /*Inputni bo'shatish metodi */
//   addFormHandler = e => {
//     e.preventDefault();
//     this.props.addFormItem({name: this.state.name, views: this.state.views})
//     this.setState({
//       name: '',
//       views: '',
//     })
//   }
//   render() {
    
//     const { name, views } = this.state;

//     return (
//       <div className="movies-add_form">
//         <h3>New Add Movies</h3>
//         <form className="add-form d-flex" onSubmit={this.addFormHandler}>
//           <input
//             onChange={this.changeHandlerInput}
//             type="text"
//             className="form-control new-post-label"
//             placeholder="What a movie?"
//             name="name"
//             value={name}
//           />
//           <input
//             onChange={this.changeHandlerInput}
//             type="number"
//             className="form-control new-post-label"
//             placeholder="How many times it has been viewed?"
//             name="views"
//             value={views}
//           />
//           <button type="submit" className="btn btn-outline-dark">
//             Add
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// // const MoviesAddForm = () => {
// //   return (
// //     <div className="movies-add_form">
// //         <h3>New Add Movies</h3>
// //         <form className="add-form d-flex">
// //             <input type="text" className="form-control new-post-label" placeholder="What a movie?"/>
// //             <input type="number" className="form-control new-post-label" placeholder="How many times it has been viewed?"/>
// //             <button type="submit"
// //                 className="btn btn-outline-dark"
// //             >
// //                 Add
// //             </button>
// //         </form>
// //     </div>
// //   )
// // }

export default MoviesAddForm;

/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './movi-list_item.css'

const MovieListItem = ({onToogleActiveIcon, onDelete, name, views, favourite, like}) => {

    return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite' } ${like && 'like'}`}>
        <span className="list-group-item-label" onClick={onToogleActiveIcon} data-toogle="like">{name}</span>
        <input type="number" className="form-control w-25 list-group-item-input " defaultValue={views}/>
        <div className="d-flex justify-content-center align-items-center">
            <button 
                onClick={onToogleActiveIcon}
                type="button" 
                className='btn-cookie btn-sm'
                data-toogle="favourite"
                >
                <i className="fas fa-cookie"></i>
            </button>
            <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                <i className="fas fa-trash"></i>
            </button>
            <button>
                <i className="fas fa-star"></i>
            </button>
        </div>
    </li>
    
    )
}



// class MovieListItem extends Component {

//     constructor(props){
//         super(props);
//         this.state = {favourite: false, like: false};
//     }

//     render() {
//         const {name, views, favourite, like, onDelete, onToogleActiveIcon} = this.props;

//         return (
//             <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite' } ${like && 'like'}`}>
//                 <span className="list-group-item-label" onClick={onToogleActiveIcon} data-toogle="like">{name}</span>
//                 <input type="number" className="form-control w-25 list-group-item-input " defaultValue={views}/>
//                 <div className="d-flex justify-content-center align-items-center">
//                     <button 
//                         onClick={onToogleActiveIcon}
//                         type="button" 
//                         className='btn-cookie btn-sm'
//                         data-toogle="favourite"
//                         >
//                         <i className="fas fa-cookie"></i>
//                     </button>
//                     <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <button>
//                         <i className="fas fa-star"></i>
//                     </button>
//                 </div>
//             </li>
            
//           )
//     }
// }



export default MovieListItem
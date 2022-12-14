/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import {Context} from '../../context'
import './movi-list_item.css'

const MovieListItem = ({name, views, favourite, like, id}) => {

    const {_, dispatch} = useContext(Context)

    const onDelete = () => {
        dispatch({type: 'ON_DELETE', payload: id})
    }

    const onToggleIcon = (e) => {
        const payload = {
            id,
            icon:  e.currentTarget.getAttribute('data-toogle')
        }
        dispatch({type: 'ON_TOGGLE_ICON', payload })
    }
    return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite' } ${like && 'like'}`}>
        <span className="list-group-item-label" onClick={onToggleIcon} data-toogle="like">{name}</span>
        <input type="number" className="form-control w-25 list-group-item-input " defaultValue={views}/>
        <div className="d-flex justify-content-center align-items-center">
            <button 
                onClick={onToggleIcon}
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


export default MovieListItem
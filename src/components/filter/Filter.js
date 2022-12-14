import { useContext } from 'react';
import { Context } from '../../context';
import './filter.css'

const Filter = () => {

    const {state, dispatch} = useContext(Context)
    
    return (

        <div className="btn-group">
            {btnsArr.map(btn => (
                <button 
                    onClick={() => dispatch({type: 'ON_FILTER', payload: btn.name})}
                    key={btn.name}
                    className={` btn ${state.filter === btn.name ? 'btn-dark': 'btn-outline-dark'}`}
                    type='button'
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
}

const btnsArr = [
    {name: 'all', label: 'All Movies'},
    {name: 'like', label: 'Popular Movies'},
    {name: 'views', label: 'Most viewed movies'}
]

export default Filter;
import './filter.css'

const Filter = () => {
    return (

        <div className="btn-group">
            <button className='btn btn-dark' type='button'>All Movies</button>
            <button className='btn btn-outline-dark' type='button'>Popular Movies</button>
            <button className='btn btn-outline-dark' type='button'>Most viewed movies</button>  
        </div>
    );
}

export default Filter;
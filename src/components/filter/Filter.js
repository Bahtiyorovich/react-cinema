import './filter.css'

const Filter = ({updateFilterHandler, filter}) => {
    return (

        <div className="btn-group">
            {btnsArr.map(btn => (
                <button 
                    onClick={() => updateFilterHandler(btn.name)}
                    key={btn.name}
                    className={` btn ${filter === btn.name ? 'btn-dark': 'btn-outline-dark'}`}
                    type='button'
                >
                    {btn.label}
                </button>
            ))}
            {/* <button className='btn btn-outline-dark' type='button'>Popular Movies</button>
            <button className='btn btn-outline-dark' type='button'>Most viewed movies</button>   */}
        </div>
    );
}

const btnsArr = [
    {name: 'all', label: 'All Movies'},
    {name: 'like', label: 'Popular Movies'},
    {name: 'views', label: 'Most viewed movies'}
]

export default Filter;
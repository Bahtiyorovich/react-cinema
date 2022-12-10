import './appInfo.css';

const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">Number of all movies: {allMoviesCount}</p>
            <p className="fs-4 text-uppercase">Number of favourite movies : {favouriteMoviesCount}</p>
        </div>
    );
}

export default AppInfo;
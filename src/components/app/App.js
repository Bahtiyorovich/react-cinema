import './app.css';
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import Filter from '../filter/Filter';
import { MoviesList } from '../movies/MoviesList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';


const App = () => {
  return (
    <div className="app">
      <div className = "content"> 
        <AppInfo/>
        <div className="search-boxpanel">
          <SearchPanel/>
          <Filter/>
        </div>
        <div className="movies">
          <MoviesList/>
        </div>
        <MoviesAddForm/>
      </div>
    </div>
  );
}

export default App;
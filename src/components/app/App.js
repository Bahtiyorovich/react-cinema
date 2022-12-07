import './app.css';
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import Filter from '../filter/Filter';
import { MoviesList } from '../movies/MoviesList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';


const App = () => {

  const data = [
    {name: "Empire Of Osman", views: 135687, favourite:false},
    {name: 'Avangers', views: 256879, favourite:true},
    {name: 'Spider Man', views: 564789, favourite:false},
    {name: 'Iron Man', views: 256879, favourite:true}
  ]

  return (
    <div className="app">
      <div className = "content"> 
        <AppInfo/>
        <div className="search-boxpanel">
          <SearchPanel/>
          <Filter/>
        </div>
        <div className="movies">
          <MoviesList data={data}/>
        </div>
        <MoviesAddForm/>
      </div>
    </div>
  );
}

export default App;
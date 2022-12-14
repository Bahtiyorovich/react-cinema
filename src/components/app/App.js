import React, {useState, useEffect, useContext} from 'react'
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import Filter from '../filter/Filter';
import MoviesList from '../movies/MoviesList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import { Context } from '../../context';
import './app.css';

// /*Bu (uuidv4) import bizga unique id beradi */
// import { v4 as uuidv4 } from 'uuid';

/*Function Component */

const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  const {_, dispatch} = useContext(Context)

  /*Backenddan data kelishi useEffect hook yordamida: 
    ya'ni: user sahifaga kirishi bilan data ko'rsatilsin ma'nosida ishlayapti
  */
  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
    .then(response => response.json())
    .then(json => {
      const newArray = json.map(item => ({
         name: item.title, 
         id: item.id,
         favourite: false,
         like: false,
        views: item.id * 128,
      }))
      dispatch({type: 'GET_DATA', payload: newArray})
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }, [])

/* api dan ma'lumotni olishda limit belgilash query so'rovi:  ?_start=0&_limit=5 */

  return (
          <div className="app">
            <div className = "content"> 
              <AppInfo/>
              <div className="search-boxpanel">
                <SearchPanel/>
                <Filter/>
              </div>
              <div className="movies">
                {isLoading && 'Loading...'}
                <MoviesList/>
              </div>
              <MoviesAddForm/>
            </div>
          </div>
        );
}

export default App;





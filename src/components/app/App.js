import React, {useState, useEffect} from 'react'
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import Filter from '../filter/Filter';
import MoviesList from '../movies/MoviesList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import './app.css';

/*Bu (uuidv4) import bizga unique id beradi */
import { v4 as uuidv4 } from 'uuid';

/*Function Component */

const App = () => {

  const[data, setData] = useState([])
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(false)


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
      setData(newArray)
    })
    .catch(err => console.log('error'))
    .finally(() => setIsLoading(false))
  }, [])

/* api dan ma'lumotni olishda limit belgilash query so'rovi:  ?_start=0&_limit=5 */


  /* React da datalarni to'g'ridan to'g'ri o'zgartirib bo'lmaydi 
//     onDelete metodi react qoidalariga asosan tuzildi.
//   */
  const onDelete = (id) => {
    /*Kod 1 qator bo'lgani uchun srazi obyekt qaytardik */
    const newArray =  data.filter(c => c.id !== id)
    setData(newArray)
      
  }


  /*Inputdan ma'lumot olish metodi */
  const addFormItem = item => {
    const newItem = {name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false};
    const newArray = [...data, newItem]
    setData(newArray)
  }

  const onToogleActiveIcon = (id, icon) => {
    const newArray = data.map(item => {
      if(item.id === id){
        return {...item, [icon]: !item[icon] }
      }
      return item
    })
    setData(newArray)
  }
  
//   /*Search Component to method */
 const searchHandler = (arr, term) => {
    if(term.length === 0){
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case 'like': 
        return arr.filter( c => c.like)
      case 'views': 
        return arr.filter( c => c.views > 1000)
      default: 
        return arr;
    }
  }

  const updateTermHandler = term =>  setTerm( term )
  const updateFilterHandler = filter => setFilter( filter)

  return (
          <div className="app">
            <div className = "content"> 
              <AppInfo allMoviesCount={data.length} favouriteMoviesCount={data.filter(c => c.favourite).length}/>
              <div className="search-boxpanel">
                <SearchPanel updateTermHandler = {updateTermHandler}/>
                <Filter filter={filter} updateFilterHandler={updateFilterHandler}/>
              </div>
              <div className="movies">
                {isLoading && 'Loading...'}
                <MoviesList 
                  data={filterHandler(searchHandler(data, term), filter)} 
                  onDelete = {onDelete}
                  onToogleActiveIcon = {onToogleActiveIcon}
                  />
              </div>
              <MoviesAddForm addFormItem = {addFormItem}/>
            </div>
          </div>
        );
}

export default App;




/*Class Component */
// class App extends Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       data: [
//         {id:1, name: 'Hitmen Agent', views: 345, favourite: false, like: false},
//         {id:2, name: 'Agent 007', views: 34587, favourite: false, like: false},
//         {id:3, name: 'Avangers', views: 652, favourite: false, like: false},
//         {id:4, name: 'Harry Poter', views: 145, favourite: false, like: false},
//         {id:5, name: 'Iron Man', views: 123987, favourite: false, like: false},
//       ],
//       term: '',
//       filter: 'all',
//     }
//   }
  
//   /* React da datalarni to'g'ridan to'g'ri o'zgartirib bo'lmaydi 
//     onDelete metodi react qoidalariga asosan tuzildi.
//   */
//   onDelete = (id) => {
//     /*Kod 1 qator bo'lgani uchun srazi obyekt qaytardik */
//     this.setState(({data}) => ({
//       data: data.filter(c => c.id !== id)
//     }))
//   }

//   /*Inputdan ma'lumot olish metodi */
//   addFormItem = item => {
//     const newItem = {name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false};
//     this.setState(({data}) => ({
//       data: [...data, newItem]
//     }));
//   }

//   onToogleActiveIcon = (id, icon) => {
//     this.setState(({data}) => ({
//       data:  data.map(item => {
//         if(item.id === id){
//           return {...item, [icon]: !item[icon] }
//         }
//         return item
//       })
//     }))
//   }
  
//   /*Search Component to method */
//   searchHandler = (arr, term) => {
//     if(term.length === 0){
//       return arr
//     }
//     return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
//   }

//   filterHandler = (arr, filter) => {
//     switch (filter) {
//       case 'like': 
//         return arr.filter( c => c.like)
//       case 'views': 
//         return arr.filter( c => c.views > 1000)
//       default: 
//         return arr;
//     }
//   }

//   updateTermHandler = term =>  this.setState({ term })
//   updateFilterHandler = filter => this.setState({ filter })

//   render() {
    
//     const {data, term, filter} = this.state;
//     const allMoviesCount = data.length;
//     const favouriteMoviesCount = data.filter(c => c.favourite).length;
//     const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

//     return (
//       <div className="app">
//         <div className = "content"> 
//           <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount}/>
//           <div className="search-boxpanel">
//             <SearchPanel updateTermHandler = {this.updateTermHandler}/>
//             <Filter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
//           </div>
//           <div className="movies">
//             <MoviesList 
//               data={visibleData} 
//               onDelete = {this.onDelete}
//               onToogleActiveIcon = {this.onToogleActiveIcon}
//               />
//           </div>
//           <MoviesAddForm addFormItem = {this.addFormItem}/>
//         </div>
//       </div>
//     );
//   }
// }


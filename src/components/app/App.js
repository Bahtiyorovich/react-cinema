import React, {Component} from 'react'
import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import Filter from '../filter/Filter';
import MoviesList from '../movies/MoviesList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import './app.css';

/*Bu (uuidv4) import bizga unique id beradi */
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }
  
  /* React da datalarni to'g'ridan to'g'ri o'zgartirib bo'lmaydi 
    onDelete metodi react qoidalariga asosan tuzildi.
  */
  onDelete = (id) => {
    /*Kod 1 qator bo'lgani uchun srazi obyekt qaytardik */
    this.setState(({data}) => ({
      data: data.filter(c => c.id !== id)
    }))
  }

  /*Inputdan ma'lumot olish metodi */
  addFormItem = item => {
    const newItem = {name: item.name, views: item.views, id: uuidv4(), favourite: false, like: false};
    this.setState(({data}) => ({
      data: [...data, newItem]
    }));
  }

  onToogleActiveIcon = (id, icon) => {
    this.setState(({data}) => ({
      data:  data.map(item => {
        if(item.id === id){
          return {...item, [icon]: !item[icon] }
        }
        return item
      })
    }))
  }
  

  render() {
    
    const {data} = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter(c => c.favourite).length;

    return (
      <div className="app">
        <div className = "content"> 
          <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount}/>
          <div className="search-boxpanel">
            <SearchPanel/>
            <Filter/>
          </div>
          <div className="movies">
            <MoviesList 
              data={data} 
              onDelete = {this.onDelete}
              onToogleActiveIcon = {this.onToogleActiveIcon}
              />
          </div>
          <MoviesAddForm addFormItem = {this.addFormItem}/>
        </div>
      </div>
    );
  }
}

// const App = () => {

//   const data = [
//     {id:1, name: 'Avangers', views: 256879, favourite:true},
//     {id:2, name: "Empire Of Osman", views: 135687, favourite:false},
//     {id:3, name: 'Spider Man', views: 564789, favourite:false},
//     {id:4, name: 'Iron Man', views: 256879, favourite:true},
//     {id:5, name: 'Avatar', views: 256555, favourite: false}
//   ]

//   const onDelete = (id) => {
//     console.log(id);
//   }

//   return (
//     <div className="app">
//       <div className = "content"> 
//         <AppInfo/>
//         <div className="search-boxpanel">
//           <SearchPanel/>
//           <Filter/>
//         </div>
//         <div className="movies">
//           <MoviesList data={data} onDelete = {onDelete}/>
//         </div>
//         <MoviesAddForm/>
//       </div>
//     </div>
//   );
// }

export default App;
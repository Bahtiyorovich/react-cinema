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
      data: [
        {id:1, name: 'Hitmen Agent', views: 345, favourite: false, like: false},
        {id:2, name: 'Agent 007', views: 34587, favourite: false, like: false},
        {id:3, name: 'Avangers', views: 652, favourite: false, like: false},
        {id:4, name: 'Harry Poter', views: 145, favourite: false, like: false},
        {id:5, name: 'Iron Man', views: 123987, favourite: false, like: false},
      ],
      term: '',
      filter: 'all',
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
  
  /*Search Component to method */
  searchHandler = (arr, term) => {
    if(term.length === 0){
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'like': 
        return arr.filter( c => c.like)
      case 'views': 
        return arr.filter( c => c.views > 1000)
      default: 
        return arr;
    }
  }

  updateTermHandler = term =>  this.setState({ term })
  updateFilterHandler = filter => this.setState({ filter })

  render() {
    
    const {data, term, filter} = this.state;
    const allMoviesCount = data.length;
    const favouriteMoviesCount = data.filter(c => c.favourite).length;
    const visibleData = this.filterHandler(this.searchHandler(data, term), filter)

    return (
      <div className="app">
        <div className = "content"> 
          <AppInfo allMoviesCount={allMoviesCount} favouriteMoviesCount={favouriteMoviesCount}/>
          <div className="search-boxpanel">
            <SearchPanel updateTermHandler = {this.updateTermHandler}/>
            <Filter filter={filter} updateFilterHandler={this.updateFilterHandler}/>
          </div>
          <div className="movies">
            <MoviesList 
              data={visibleData} 
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
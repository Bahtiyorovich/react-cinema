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

  export {searchHandler, filterHandler}
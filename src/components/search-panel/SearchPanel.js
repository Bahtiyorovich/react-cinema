 import React, {useState, useContext} from 'react';
 import {Context} from '../../context'
 import './searchPanel.css'


 const SearchPanel = () => {

    const [term, setTerm] = useState('');
    const {_, dispatch} = useContext(Context)

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase();
        setTerm(term)
        dispatch({ type: 'ON_TERM', payload: term})
    }

    return (
        <>
            <input 
                type="text" 
                className="search-input form-control" 
                placeholder="Search movies.."
                onChange={updateTermHandler}
                value={term}
            />
        </>
    )
 }




// class SearchPanel extends Component {

//     constructor(props){
//         super(props);
//         this.state = { term: ''}
//     }

//     updateTermHandler = e => {
//         const term = e.target.value.toLowerCase();
//         this.setState({ term })
//         this.props.updateTermHandler(term)
//     }

//     render() {
//         return (
//             <>
//                 <input 
//                     type="text" 
//                     className="search-input form-control" 
//                     placeholder="Search movies.."
//                     onChange={this.updateTermHandler}
//                     value={this.state.term}
//                 />
//             </>
//         )
//     }
// }

 export default SearchPanel;
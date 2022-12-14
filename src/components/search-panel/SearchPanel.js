 import React, {useState} from 'react';
 import './searchPanel.css'


 const SearchPanel = (props) => {

    const [term, setTerm] = useState('');

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase();
        setTerm(term)
        props.updateTermHandler(term);
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
 import React, {Component} from 'react';
 import './searchPanel.css'

class SearchPanel extends Component {

    constructor(props){
        super(props);
        this.state = { term: ''}
    }

    updateTermHandler = e => {
        const term = e.target.value.toLowerCase();
        this.setState({ term })
        this.props.updateTermHandler(term)
    }

    render() {
        return (
            <>
                <input 
                    type="text" 
                    className="search-input form-control" 
                    placeholder="Search movies.."
                    onChange={this.updateTermHandler}
                    value={this.state.term}
                />
            </>
        )
    }
}



//  const SearchPanel = () => {
//     return (
//         <div>
//             <input type="text" className="search-input form-control" placeholder="Search movies.."/>
//         </div>
//     );
//  }

 export default SearchPanel;
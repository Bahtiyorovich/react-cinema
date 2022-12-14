import { useContext } from 'react';
import { Context } from '../../context';
import './appInfo.css';

const AppInfo = () => {

    const {state} = useContext(Context)


    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">Number of all movies: {state.data.length}</p>
            <p className="fs-4 text-uppercase">Number of favourite movies : {state.data.filter(c => c.favourite).length}</p>
        </div>
    );
}

export default AppInfo;
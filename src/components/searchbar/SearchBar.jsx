import { Select } from '../select/Select';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

import * as React from 'react';
import { Context } from '../../context/context';

export const SearchBar = () => {

    const {setGenre} = React.useContext(Context);
    
    return (
        <section className='search-input-container' >
            <div className='center-content'>
                <SearchIcon/>
                <input
                    className='searchbar-input'
                    type="text"
                    placeholder='Search for movies or TV series'
                />
            </div>
            <Select onSelection={setGenre} />
        </section>
    );
};
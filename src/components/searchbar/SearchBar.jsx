import * as React from 'react';
import { Select } from '../select/Select';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Context } from '../../context/context';
import { debounce } from 'lodash';

export const SearchBar = () => {
    console.log('%cstart searchbar render', 'color: lightCoral')
    const {setSearchTerm} = React.useContext(Context);

    function handleChange(e){
        setSearchTerm(e.target.value)
    }

    const debouncedChange = debounce(handleChange, 500);

    return (
        <section className='search-input-container' >
            <div className='center-content'>
                    <SearchIcon />
                    <input
                        className='searchbar-input'
                        type="text"
                        placeholder='Search for movies or TV series'
                        onChange={debouncedChange}
                    />
            </div>
            <Select  /> 
        </section>
    );
};
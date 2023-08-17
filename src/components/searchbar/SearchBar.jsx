import * as React from 'react';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';
import { useSearchContext } from '../../context/SearchProvider';

export const SearchBar = () => {
    console.log('%cstart searchbar render', 'color: lightCoral')
    const {setSearchTerm} = useSearchContext();

    const handleChange = React.useCallback((e) => {
        setSearchTerm(e.target.value)
    }, [setSearchTerm]);

    const debouncedChange = debounce(handleChange, 500);
    return (
        <section>
            <div className='center-content'>
                    <SearchIcon />
                    <input
                        className='searchbar-input'
                        type="text"
                        placeholder='Search for movies or TV series'
                        onChange={debouncedChange}
                    />
            </div>
        </section>
    );
};


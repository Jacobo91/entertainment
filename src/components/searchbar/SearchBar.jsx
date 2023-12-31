import * as React from 'react';
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useSearchContext } from '../../context/SearchProvider';
import { useGenreContext } from '../../context/GenreProvider';


export const SearchBar = () => {

    const { searchTerm, setSearchTerm } = useSearchContext();
    const {setGenre} = useGenreContext();


    const handleChange = React.useCallback((e) => {
        const {value} = e.target;
        setSearchTerm(value);
        setGenre("");
        
    }, [setSearchTerm, setGenre]);


    return (
        <section>
            <div className='center-content'>
                    <SearchIcon />
                    <input
                        className='searchbar-input'
                        type="text"
                        placeholder='Search for movies or TV series'
                        onChange={handleChange}
                        value={searchTerm}
                    />
            </div>
        </section>
    );
};


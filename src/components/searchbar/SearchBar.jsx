import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';


export const SearchBar = () => {
    return (
        <section className='search-input-container' >
            <div className='center-content'>
                <SearchIcon />
                <input
                    className='searchbar-input'
                    type="text"
                    placeholder='Search for movies or TV series'
                />
            </div>
        </section>
    );
};
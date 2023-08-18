import './Main.css';
import * as React from 'react';
import { SearchBar } from '../searchbar/SearchBar';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { Series } from '../../pages/Series';
import { Bookmarked } from '../../pages/Bookmarked';
import { Select } from '../select/Select';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../../context/SearchProvider';

export const Main = () => {
    console.log("%cstart main section render", 'color: skyBlue')

    const { setSearchTerm } = useSearchContext();

    const location = useLocation();
    const locationStr = useLocation().pathname.replace("/", "");

    React.useEffect(() => {
        setSearchTerm('');
    }, [location, setSearchTerm]);

    return(
        <main className='main-display'>
            <div className='search-filter-container' >
                <SearchBar />
                {locationStr === 'movies' || locationStr === 'series' ? (<Select/>) : null}
            </div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/movies' element={<Movies/>} />
                <Route path='/series' element={<Series/>} />
                <Route path='/bookmarked' element={<Bookmarked/>} />
            </Routes>
        </main>
    );
};
import './Main.css';
import { SearchBar } from '../searchbar/SearchBar';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { Movies } from '../../pages/Movies';
import { Series } from '../../pages/Series';
import { Bookmarked } from '../../pages/Bookmarked';

export const Main = () => {
    return(
        <main className='main-display' >
            <SearchBar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/movies' element={<Movies/>} />
                <Route path='/series' element={<Series/>} />
                <Route path='/bookmarked' element={<Bookmarked/>} />
            </Routes>
        </main>
    );
};
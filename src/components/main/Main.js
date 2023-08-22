import './Main.css';
import * as React from 'react';
import { SearchBar } from '../searchbar/SearchBar';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner';

import { Select } from '../select/Select';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../../context/SearchProvider';
import { useGenreContext } from '../../context/GenreProvider';

const LazyHome = React.lazy(() => import('../../pages/Home'));
const LazyMovies = React.lazy(() => import('../../pages/Movies'));
const LazySeries = React.lazy(() => import('../../pages/Series'));
const LazyBookmarked = React.lazy(() => import('../../pages/Bookmarked'));

export const Main = () => {

    const { setSearchTerm } = useSearchContext();
    const { setGenre } = useGenreContext();

    const location = useLocation();
    const locationStr = useLocation().pathname.replace("/", "");

    React.useEffect(() => {
        setSearchTerm('');
        setGenre('');
    }, [location, setSearchTerm, setGenre]);

    return(
        <main className='main-display'>
            <div className='search-filter-container' >
                <SearchBar />
                {locationStr === 'movies' || locationStr === 'series' ? (<Select/>) : null}
            </div>
            <Routes>
                <Route path='/' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyHome/></React.Suspense>} />
                <Route path='/movies' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyMovies/></React.Suspense>} />
                <Route path='/series' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazySeries/></React.Suspense>} />
                <Route path='/bookmarked' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyBookmarked/></React.Suspense>} />
            </Routes>
        </main>
    );
};
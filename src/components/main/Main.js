import './Main.css';
import * as React from 'react';
import { SearchBar } from '../searchbar/SearchBar';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner';

// import { Home } from '../../pages/Home';
// import { Movies } from '../../pages/Movies';
// import { Series } from '../../pages/Series';
// import { Bookmarked } from '../../pages/Bookmarked';
import { Select } from '../select/Select';
import { useLocation } from 'react-router-dom';
import { useSearchContext } from '../../context/SearchProvider';

const LazyHome = React.lazy(() => import('../../pages/Home'));
const LazyMovies = React.lazy(() => import('../../pages/Movies'));
const LazySeries = React.lazy(() => import('../../pages/Series'));
const LazyBookmarked = React.lazy(() => import('../../pages/Bookmarked'));

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
                <Route path='/' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyHome/></React.Suspense>} />
                <Route path='/movies' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyMovies/></React.Suspense>} />
                <Route path='/series' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazySeries/></React.Suspense>} />
                <Route path='/bookmarked' element={<React.Suspense fallback={<LoadingSpinner/>} ><LazyBookmarked/></React.Suspense>} />
            </Routes>
        </main>
    );
};
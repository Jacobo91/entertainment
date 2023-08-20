import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";

import * as React from 'react';
import { useGenreContext } from "../context/GenreProvider";
import { useSearchContext } from "../context/SearchProvider";
import NoResults from '../components/noResults/NoResults';

const Series = () => {
    console.log('%crendering Series', 'color: green')
    const { genre } = useGenreContext();
    const {searchTerm} = useSearchContext();

    const {isLoading, 
        hasError, 
        data} = useTitles(genre, 2000, "tvEpisode", 40, searchTerm);
        
    if (isLoading) {
    return (<LoadingSpinner/>)
    }

    if (!isLoading && data.length === 0) {
        return (<NoResults/>)
    }

    if (hasError) {
    return (<p>{`Error: ${hasError}`}</p>)
    }

    console.log(data)
    return (
        <>
            <Recommended title='Series' data={data}/>
        </>
    )
}

export default Series;
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";

import * as React from 'react';
import { useGenreContext } from "../context/GenreProvider";
import { useSearchContext } from "../context/SearchProvider";

const Series = () => {
    console.log('%crendering Series', 'color: green')
    const { genre } = useGenreContext();
    const {searchTerm} = useSearchContext();

    const {isLoading, 
        hasError, 
        data} = useTitles(genre, 2000, "tvEpisode", 30, searchTerm);

    if (isLoading) {
    return (<LoadingSpinner/>)
    }

    if (hasError) {
    return (<p>{`Error: ${hasError}`}</p>)
    }
    return (
        <>
            <Recommended title='Series' data={data}/>
        </>
    )
}

export default Series;
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";

import * as React from 'react';
import { useGenreContext } from "../context/GenreProvider";

export const Movies = () => {
    console.log('%crendering Movies', 'color: red')
    const { genre } = useGenreContext()

    const {isLoading, 
            hasError, 
            data} = useTitles(genre, 2023, "movie", 40);

    if (isLoading) {
        return (<LoadingSpinner/>)
    }

    if (hasError) {
        return (<p>{`Error: ${hasError}`}</p>)
    }
    
    return (
        <>
            {data && <Recommended  title='Movies' data={data} isLoading={isLoading} />}
        </>
    )
}
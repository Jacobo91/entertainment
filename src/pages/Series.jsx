import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";

import * as React from 'react';
import { Context } from "../context/context"; 

export const Series = () => {
    console.log('%crendering Series', 'color: green')
    const { genre } = React.useContext(Context);

    const {isLoading, 
        hasError, 
        data} = useTitles(genre, 2000, "tvEpisode", 30);

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
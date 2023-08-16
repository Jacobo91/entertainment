import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";


export const Home = () => { 

    const {isLoading, 
        hasError, 
        data} = useTitles("", 2015, "movie", 50);

    if (isLoading) {
    return (<LoadingSpinner/>)
    }

    if (hasError) {
    return (<p>{`Error: ${hasError}`}</p>)
    }   

    return (
        <>
            <Trending data={data} />
            <Recommended title="Recommended for you" data={data}/>
        </>
    )
}
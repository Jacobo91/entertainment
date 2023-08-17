import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { useRandom } from "../hooks/useRandom";
import { useSearchContext } from "../context/SearchProvider";

export const Home = () => { 

    const { searchTerm } = useSearchContext();
  
    console.log('%crendering Home', 'color: brown')
    const { isLoading,
            hasError,
            data } = useTitles("", 2015, "movie", 50, searchTerm);

    const { isLoadingRandom,
            hasErrorRandom, 
            randomData } = useRandom();

    if (isLoading || isLoadingRandom) {
    return (<LoadingSpinner/>)
    }

    if (hasError || hasErrorRandom) {
    return (<p>{`Error: ${hasError}`}</p>)
    }   
    return (
        <>
            <Trending data={randomData} />
            <Recommended title="Recommended for you" data={data}/>
        </>
    )
}
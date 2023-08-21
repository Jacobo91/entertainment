import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";
import { useTitles } from "../hooks/useTitles";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { useRandom } from "../hooks/useRandom";
import { useSearchContext } from "../context/SearchProvider";
import NoResults from '../components/noResults/NoResults';


const Home = () => { 

    const { searchTerm } = useSearchContext();

    const { isLoading,
            hasError,
            data,
            entries } = useTitles("", 2015, "movie", 20, searchTerm);

    const { isLoadingRandom,
            hasErrorRandom, 
            randomData } = useRandom();

    if (isLoading || isLoadingRandom) {
    return (<LoadingSpinner/>)
    }

    if (entries === 0) {
        return <NoResults/>
    }

    if (hasError || hasErrorRandom) {
    return (<p>{`Error: ${hasError}`}</p>)
    }   
    return (
        <>
            {!searchTerm && <Trending data={randomData} />}
            <Recommended title="Recommended for you" data={data}/>
        </>
    )
}

export default Home;


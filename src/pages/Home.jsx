import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { useRandom } from "../hooks/useRandom";
import { useSearchContext } from "../context/SearchProvider";



const Home = () => { 

    const { searchTerm } = useSearchContext();

    const { isLoadingRandom,
            hasErrorRandom, 
            randomData } = useRandom();

    if (isLoadingRandom) {
    return (<LoadingSpinner/>)
    }

    if (hasErrorRandom) {
    return (<p>{`Error: ${hasErrorRandom}`}</p>)
    }   
    return (
        <>
            {!searchTerm && <Trending data={randomData} />}
            <Recommended title="Recommended for you" />
        </>
    )
}

export default Home;


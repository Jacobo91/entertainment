import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";
import { useSearchContext } from "../context/SearchProvider";



const Home = () => { 

    return (
        <>
            <Trending />
            <Recommended title="Recommended for you" />
        </>
    )
}

export default Home;


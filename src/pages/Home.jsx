import { Trending } from "../components/trending/Trending";
import { Recommended } from "../components/recommended/Recommended";

export const Home = () => { 
    return (
        <>
            <Trending />
            <Recommended title="Recommended for you" />
        </>
    )
}
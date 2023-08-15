import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended"
import { useTitles } from "../hooks/useTitles";


export const Series = () => {
    const {isLoading, 
        hasError, 
        data} = useTitles("Horror", 2000, "tvEpisode", 10);

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
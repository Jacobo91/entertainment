import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import { Recommended } from "../components/recommended/Recommended"
import { useTitles } from "../hooks/useTitles"

export const Movies = () => {

    const {isLoading, 
            hasError, 
            data} = useTitles("Drama", 2023, "movie", 10);

    if (isLoading) {
        return (<LoadingSpinner/>)
    }

    if (hasError) {
        return (<p>{`Error: ${hasError}`}</p>)
    }
    
    return (
        <>
            {data && <Recommended  title='Movies' data={data}/>}
        </>
    )
}
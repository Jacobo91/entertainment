import { Recommended } from "../components/recommended/Recommended"
import { useFavoritesContext } from "../context/useFavorites"

const Bookmarked = () => {
    console.log('%crendering Bookmarked', 'color: orange') 
    const { favorites } = useFavoritesContext();
    console.log("favorites:", favorites)
    return (
        <>
            <Recommended title="Favorites" data={favorites}/>
        </>
    )
}

export default Bookmarked;
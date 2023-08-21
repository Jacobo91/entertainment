import { Recommended } from "../components/recommended/Recommended"
import { useFavoritesContext } from "../context/useFavorites"

const Bookmarked = () => {
    const { favorites } = useFavoritesContext();
    return (
        <>
            <Recommended title="Favorites" bookmarked={favorites}/>
        </>
    )
}

export default Bookmarked;
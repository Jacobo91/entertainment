import { Bookmarks } from "../components/bookmarks/Bookmarks";
import { useFavoritesContext } from "../context/useFavorites"

const Bookmarked = () => {
    const { favorites } = useFavoritesContext();
    return (
        <>
            <Bookmarks bookmarked={favorites}/>
        </>
    )
}

export default Bookmarked;
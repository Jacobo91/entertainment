import { Bookmarks } from "../components/bookmarks/Bookmarks";
import { useFavoritesContext } from "../context/useFavorites"
import { useSearchContext } from "../context/SearchProvider";

const Bookmarked = () => {
    const { searchTerm } = useSearchContext()
    const { favorites } = useFavoritesContext(searchTerm);

    const filteredFavorites = favorites.filter(title => title.titleText.text.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <>
            <Bookmarks bookmarked={filteredFavorites}/>
        </>
    )
}

export default Bookmarked;
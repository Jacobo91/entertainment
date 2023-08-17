import { Recommended } from "../components/recommended/Recommended"


export const Bookmarked = () => {
    console.log('%crendering Bookmarked', 'color: orange') 
    return (
        <>
            <Recommended title="Favorites" />
        </>
    )
}
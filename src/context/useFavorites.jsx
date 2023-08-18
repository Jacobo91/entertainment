import * as React from 'react';



const FavoritesContext = React.createContext();

export const FavoritesProvider = ({ children }) => { 
    const [favorites, setFavorites] = React.useState( () =>
        JSON.parse(window.localStorage.getItem('favorites')) || []
    );

    React.useEffect(() => {
        window.localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                setFavorites,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavoritesContext = () => {
    return React.useContext(FavoritesContext);
}
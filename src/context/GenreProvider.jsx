import * as React from 'react';

const GenreContext = React.createContext();

export const GenreProvider = ({ children }) => {
    const [genre, setGenre] = React.useState("");
    return(
        <GenreContext.Provider
            value={{
                genre,
                setGenre,
            }}
        >
            {children}
        </GenreContext.Provider>
    );
}

export const useGenreContext = () => {
    return React.useContext(GenreContext)
}
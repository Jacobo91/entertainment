import * as React from 'react';


const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    return (
        <SearchContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => {
    return React.useContext(SearchContext);
}
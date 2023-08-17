import * as React from 'react';
import { Context } from './context';

const ContextProvider = ({ children }) => {
    const [genre, setGenre] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");
    return(
        <Context.Provider
            value={{
                genre,
                setGenre,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
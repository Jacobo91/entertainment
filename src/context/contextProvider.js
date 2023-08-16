import * as React from 'react';
import { Context } from './context';

const ContextProvider = ({ children }) => {
    const [genre, setGenre] = React.useState("");

    return(
        <Context.Provider
            value={{
                genre,
                setGenre
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
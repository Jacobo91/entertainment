import * as React from "react";
import './Select.css';
import { useGenreContext } from "../../context/GenreProvider";
import { useSearchContext } from "../../context/SearchProvider";

export const Select = () => {
    console.log('%cstart Select render', 'color: MediumSpringGreen')
    const {genre, setGenre} = useGenreContext();
    const { searchTerm, setSearchTerm } = useSearchContext();

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setGenre(value)
        setSearchTerm("")
    };

    return (
        <>
            <select 
                id="genres" 
                name="genres"
                className="genres-selector" 
                onChange={(e) => handleChange(e)}
                value={searchTerm ? "" : genre}
                >
                <option value="">Genres</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
            </select>
        </>
    );
};
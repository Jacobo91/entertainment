import * as React from "react";
import './Select.css';
import { useGenreContext } from "../../context/GenreProvider";

export const Select = () => {
    console.log('%cstart Select render', 'color: MediumSpringGreen')
    const {setGenre} = useGenreContext();

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        setGenre(value)
    };

    return (
        <>
            <select 
                id="genres" 
                name="genres"
                className="genres-selector" 
                onChange={(e) => handleChange(e)}
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
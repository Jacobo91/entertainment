import * as React from "react";
import './Select.css';

export const Select = ({ onSelection }) => {

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
        onSelection(value)
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
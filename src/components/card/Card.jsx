import * as React from "react";
import "./Card.css";
import BookmarkIconBorder from "@mui/icons-material/BookmarkBorder";
import ClearIcon from "@mui/icons-material/Clear";
import { PropTypes } from "prop-types";
import { choppedTitle } from "../../utils";
import { useFavoritesContext } from "../../context/useFavorites";
import { useLocation } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../utils";

export const Card = ({ large, titleBar, data }) => {
    const { primaryImage, titleText, releaseYear, titleType, originalTitleText } = data;
    const { favorites, setFavorites } = useFavoritesContext();

    const location = useLocation().pathname.replace("/", "");
    const sizeClass = large ? "large" : "default";
    const titleBarClass = titleBar ? "activeTitleBar" : null;
    const imageClass = large ? "large" : "default";

    return (
        <>
            <div id="card" className={`card card--${sizeClass}`}>
                {location === "bookmarked" ? (
                    <button
                        onClick={() => removeFromFavorites(favorites, setFavorites, data)}
                        className="button-bookmark"
                    >
                        <ClearIcon />
                    </button>
                ) : (
                    <button onClick={() => addToFavorites(favorites, setFavorites, data)} className="button-bookmark">
                        <BookmarkIconBorder className="bookmarkIcon" />
                    </button>
                )}
                <img
                    id="cover"
                    className={`card--cover card--cover--${imageClass}`}
                    src={primaryImage?.url}
                    alt={titleText.text}
                />
                <div id="info" className={`card--info ${titleBarClass}`}>
                    <div id="description" className="card--description">
                        {`${releaseYear?.year} • ${titleType?.text}`}
                    </div>

                    <div id="title" className="card--title">
                        {choppedTitle(originalTitleText?.text)}
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    large: PropTypes.bool,
    titleBar: PropTypes.bool,
    data: PropTypes.array.isRequired,
};

import * as React from "react";
import "./Card.css";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ClearIcon from "@mui/icons-material/Clear";
import { PropTypes } from "prop-types";
import { choppedTitle } from "../../utils";
import { useFavoritesContext } from "../../context/useFavorites";
import { useLocation } from "react-router-dom";

export const Card = ({ large, titleBar, data }) => {
    const { primaryImage, titleText, releaseYear, titleType, originalTitleText } = data;
    const { favorites, setFavorites } = useFavoritesContext();
    console.log(favorites)

    const location = useLocation().pathname.replace("/", "");
    const sizeClass = large ? "large" : "default";
    const titleBarClass = titleBar ? "activeTitleBar" : null;
    const imageClass = large ? "large" : "default";

    function addToFavorites() {
        if (favorites) {
            const exitingTitle = favorites.findIndex(title => title.id === data.id);
            if (exitingTitle !== -1) {
                alert('This title is already in favorites')
                return;
            }
        }
        setFavorites(prevFavorites => [...prevFavorites, data]);
    }

    function removeFromFavorites() {
        if (favorites) {
            const filteredFavs = favorites.filter((title) => title.id !== data.id);
            setFavorites(filteredFavs);
        }
    }

    return (
        <>
            <div id="card" className={`card card--${sizeClass}`}>
                {location === "bookmarked" ? (
                    <button
                        onClick={() => removeFromFavorites()}
                        className="button-bookmark"
                    >
                        <ClearIcon />
                    </button>
                ) : (
                    <button onClick={() => addToFavorites()} className="button-bookmark">
                        <BookmarkBorderIcon className="bookmarkIcon" />
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

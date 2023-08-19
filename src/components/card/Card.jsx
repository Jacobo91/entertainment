import * as React from "react";
import "./Card.css";
import BookmarkIconBorder from "@mui/icons-material/BookmarkBorder";
import ClearIcon from "@mui/icons-material/Clear";
import { PropTypes } from "prop-types";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { choppedTitle } from "../../utils";
import { useFavoritesContext } from "../../context/useFavorites";
import { useLocation } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../utils";
import { Blurhash } from 'react-blurhash';

export const Card = ({ large, titleBar, data }) => {
    const { primaryImage, titleText, releaseYear, titleType, originalTitleText } = data;
    const { favorites, setFavorites } = useFavoritesContext();

    const [imageLoaded, setImageLoaded] = React.useState(false);

    const location = useLocation().pathname.replace("/", "");

    React.useEffect(() => {
        const img = new Image()
        img.onload = () => {
            setImageLoaded(true)
        };
        img.src = primaryImage?.url;
    }, [primaryImage?.url])

    return (
        <>
            <div id="card" className={`card `}>
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
                <div className={`image-wrapper`} >
                    {!imageLoaded && (
                        <Blurhash
                            className={`card--img`}
                            hash="LQRysgj[~qt7t7ayj[j[_3t7D%M{"
                            width="100%" 
                            height="100%" 
                            resolutionX={32} 
                            resolutionY={32} 
                            punch={1} />
                    )}
                    {imageLoaded && 
                        <LazyLoadImage
                            id="cover"
                            className={`card--img`}
                            src={primaryImage?.url}
                            alt={titleText.text}
                    />}
                </div>
                <div id="info" className={`card--info`}>
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
    data: PropTypes.object.isRequired,
};

import * as React from "react";
import "./Card.css";
import BookmarkIconBorder from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from "@mui/icons-material/Clear";
import { PropTypes } from "prop-types";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { choppedTitle } from "../../utils";
import { useFavoritesContext } from "../../context/useFavorites";
import { useLocation } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../utils";
import LQIP from '../../assets/blurimage.webp';


export const Card = ({ data }) => {
    const { primaryImage, titleText, releaseYear, titleType, originalTitleText } = data;
    const { favorites, setFavorites } = useFavoritesContext();
    const [isHovered, setIsHovered] = React.useState(false);

    const location = useLocation().pathname.replace("/", "");

    console.log(`${titleText.text} hovered: ${isHovered}`);

    return (
        <div className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="card-inner">
                <div className="card-front">
                    {!isHovered ? (
                        <>
                            {location === "bookmarked" ? (
                                <button onClick={() => removeFromFavorites(favorites, setFavorites, data)} className="button-bookmark">
                                    <ClearIcon />
                                </button>
                            ) : (
                                <button onClick={() => addToFavorites(favorites, setFavorites, data)} className="button-bookmark">
                                    <BookmarkIconBorder className="bookmarkIcon" />
                                </button>
                            )}
                            <div className="image-wrapper">
                                <LazyLoadImage
                                    id="cover"
                                    className="card--img"
                                    src={primaryImage?.url}
                                    alt="Image not available"
                                    effect="blur"
                                    width={'100%'}
                                    height={'100%'}
                                    placeholderSrc={LQIP}
                                />
                            </div>
                        </>
                    ) : (
                            <div className="card-back center-content">
                                <LazyLoadImage
                                    id="cover"
                                    className="card--img"
                                    src={primaryImage?.url}
                                    alt="Image not available"
                                    effect="blur"
                                    width={'100%'}
                                    height={'100%'}
                                    placeholderSrc={LQIP}
                                />
                                <div className="card-back-text center-content" >
                                    <p>{choppedTitle(originalTitleText.text)}</p>
                                    <br />
                                    <p>{releaseYear.year}</p>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    large: PropTypes.bool,
    titleBar: PropTypes.bool,
    data: PropTypes.object.isRequired,
};

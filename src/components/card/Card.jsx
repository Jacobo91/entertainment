import * as React from "react";
import "./Card.css";
import BookmarkIconBorder from "@mui/icons-material/BookmarkBorder";
import ClearIcon from "@mui/icons-material/Clear";
import { PropTypes } from "prop-types";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useFavoritesContext } from "../../context/useFavorites";
import { useLocation } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../../utils";
import LQIP from '../../assets/blurimage.webp'


export const Card = ({ data }) => {
    const { primaryImage } = data;
    const { favorites, setFavorites } = useFavoritesContext();

    const location = useLocation().pathname.replace("/", "");
    return (
        <>
            <div id="card" className={`card `} >
                <>
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
                {/* <div className='image-wrapper' > */}
                    <LazyLoadImage
                        id="cover"
                        className='card--img'
                        src={primaryImage?.url}
                        alt="Image not available"
                        effect="blur"
                        // width={'100%'}
                        // height={'100%'}
                        placeholderSrc={LQIP}
                    />
                {/* </div> */}
                </>
            </div>
        </>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
};

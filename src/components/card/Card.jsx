import * as React from "react";
import './Card.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { PropTypes } from 'prop-types';
import { choppedTitle } from "../../utils";

export const Card = ({
    large,
    titleBar,
    id,
    img,
    title,
    year,
    titleType,
    originalTitle
}) => {
    const [bookmark, setBookmark] = React.useState(false);

    const sizeClass = large ? "large" : "default";
    const titleBarClass = titleBar ? "activeTitleBar" : null;
    const imageClass = large ? "large" : "default";

    return (
        <>
            <div id="card" className={`card card--${sizeClass}`} >
                <button
                    className='button-bookmark'
                    onClick={() => setBookmark(prev => !prev)}>
                    {
                        bookmark ?
                            (<BookmarkIcon className='bookmarkIcon' />)
                            :
                            (<BookmarkBorderIcon className='bookmarkIcon' />)
                    }
                </button>
                <img
                    id="cover"
                    className={`card--cover card--cover--${imageClass}`}
                    src={img}
                    alt={title}
                />
                <div
                    id="info"
                    className={`card--info ${titleBarClass}`}
                >
                    <div id='description' className='card--description'>
                        {`${year} • ${titleType}`}
                    </div>

                    <div id='title' className='card--title'>
                        {choppedTitle(originalTitle)}
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
}
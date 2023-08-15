import * as React from "react";
import './Card.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { PropTypes } from 'prop-types';

export const Card = ({
    large,
    titleBar,
    data
}) => {

    const sizeClass = large ? "large" : "default";
    const titleBarClass = titleBar ? "activeTitleBar" : null;
    const imageClass = large ? "large" : "default";


    console.log("results:", data)
    return (
        <>
            {
                data?.map(title => (
                    <div id="card" className={`card card--${sizeClass}`} key={title.id}>
                        <button className='button-bookmark'>
                            <BookmarkBorderIcon className='bookmarkIcon' />
                        </button>
                        <img
                            id="cover"
                            className={`card--cover card--cover--${imageClass}`}
                            src={title.primaryImage?.url}
                            alt={title.titleText.text}
                        />
                        <div
                            id="info"
                            className={`card--info ${titleBarClass}`}
                        >
                            <div id='description' className='card--description'>
                                {`${title.releaseYear.year} • ${title.titleType.text}`}
                            </div>

                            <div id='title' className='card--title'>
                                {title.originalTitleText.text}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

Card.propTypes = {
    large: PropTypes.bool,
    titleBar: PropTypes.bool,
    data: PropTypes.array.isRequired,
}
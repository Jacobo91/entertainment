import './Bookmarks.css';
import { Card } from '../card/Card';
import PropTypes from 'prop-types';



export const Bookmarks = ({ bookmarked }) => {


    return (
        <section className="bookmarks-section" >
            <h2 className='title' >
                Favorites
            </h2>
            <section className='gallery-default'>
                {bookmarked &&
                    bookmarked?.map((title) => (
                        <Card
                            key={title.id}
                            data={title}
                        />
                    )) 
                }
            </section>
        </section>
    );
};

Bookmarks.propTypes = {
    bookmarked: PropTypes.array.isRequired,
}
import './Recommended.css';
import { Card } from '../card/Card';
import PropTypes from 'prop-types';

export const Recommended = ({ title, data }) => {
    return (
        <section className="recommended-section" >
            <h2 className='title' >
                {title}
            </h2>
            <section className='gallery-default'>
                {data &&
                    data?.map(title => (
                        <Card
                            key={title.id}
                            id={title.id}
                            img={title.primaryImage?.url}
                            title={title.titleText.text}
                            year={title.releaseYear?.year}
                            titleType={title.titleType.text}
                            originalTitle={title.originalTitleText.text}
                        />
                    ))
                }
            </section>
        </section>
    );
};

Recommended.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}
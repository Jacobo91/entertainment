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
                    data?.map((title, index) => (
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

Recommended.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}
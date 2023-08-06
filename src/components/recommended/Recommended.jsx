import './Recommended.css';
import PropTypes from 'prop-types';

export const Recommended = ({title}) => {
    return(
        <section className="recommended-section" >
            <h2 className='title' >
                {title}
            </h2>
            <section style={{ border: "1px solid white", height: "50px" }} >

            </section>
        </section>
    );
};

Recommended.propTypes = {
    title: PropTypes.string.isRequired,
}
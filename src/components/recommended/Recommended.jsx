import './Recommended.css';
import { Card } from '../card/Card';
import PropTypes from 'prop-types';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import NoResults from '../noResults/NoResults';
import { useSearchContext } from '../../context/SearchProvider';
import { useTitles } from '../../hooks/useTitles';
import { useGenreContext } from '../../context/GenreProvider';


export const Recommended = ({ title, bookmarked }) => {
    const { genre } = useGenreContext();
    const { searchTerm } = useSearchContext();
    const type = title === 'Movies' || title ===  'Recommended for you' ? 'movie' : 'tvEpisode';
    

    const { isLoading,
            hasError,
            data,
            entries } = useTitles(genre , 2015, type, 50, searchTerm);
    
    const myData = !bookmarked ? data : bookmarked;
    
    if (isLoading) {
        return (<LoadingSpinner/>)
        }
    
        if (entries === 0) {
            return <NoResults/>
        }
    
        if (hasError) {
        return (<p>{`Error: ${hasError}`}</p>)
        }   

    return (
        <section className="recommended-section" >
            <h2 className='title' >
                {entries > 0 && title}
            </h2>
            <section className='gallery-default'>
                {data &&
                    myData?.map((title) => (
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
}
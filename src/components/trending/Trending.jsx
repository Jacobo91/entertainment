import './Trending.css';
import { Card } from '../card/Card';

export const Trending = () => {
    return(
        <section className="trending-section" >
            <h2 className='title' >
                Trending
            </h2>
            <section>
                <Card
                    large
                    titleBar
                />
            </section>
        </section>
    );
};
import './Trending.css';
import { Card } from '../card/Card';
import * as React from 'react';
import { useRandom } from '../../hooks/useRandom';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';


export const Trending = () => {

    const { isLoadingRandom,
        hasErrorRandom, 
        randomData } = useRandom();

    if (isLoadingRandom) {
    return (<LoadingSpinner/>)
    }

    if (hasErrorRandom) {
    return (<p>{`Error: ${hasErrorRandom}`}</p>)
    } 

    return (
        <section className="trending-section" >
            <h2 className='title' >
                Trending
            </h2>

            <section className='trending-gallery' >
                {
                    randomData && randomData?.map(title => (
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
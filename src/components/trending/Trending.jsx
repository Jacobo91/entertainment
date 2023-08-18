import './Trending.css';
import { Card } from '../card/Card';
import * as React from 'react';


export const Trending = ({ data }) => {

    return (
        <section className="trending-section" >
            <h2 className='title' >
                Trending
            </h2>

            <section className='trending-gallery' >
                {
                    data && data?.map(title => (
                        <Card
                        large
                        titleBar
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
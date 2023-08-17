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
                <Card
                    large
                    titleBar
                    data={data}
                />
            </section>
        </section>
    );
};
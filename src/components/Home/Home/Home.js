import React from 'react';
import ProductsBanner from '../../ProductBanner/ProductBanner';
import Stats from '../../Stats/Stats';


import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <ProductsBanner></ProductsBanner>
            <Contact></Contact>
        </div>
    );
};

export default Home;
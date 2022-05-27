import React from 'react';
import ProductsBanner from '../../ProductBanner/ProductBanner';
import Stats from '../../Stats/Stats';


import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <ProductsBanner></ProductsBanner>
            <div className='mb-28'>
            <Contact></Contact>
            </div>
            <div className=''>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;
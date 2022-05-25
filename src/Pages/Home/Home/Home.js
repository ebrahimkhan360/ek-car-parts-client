import React from 'react';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Status from '../Status/Status';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Status></Status>
           <Products></Products>
           <Services></Services>
           
        </div>
    );
};

export default Home;
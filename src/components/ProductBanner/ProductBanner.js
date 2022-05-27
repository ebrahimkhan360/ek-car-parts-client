import React from 'react';
import { Link } from 'react-router-dom';
// import hand from '../../assets/images/hand.gif'

const ProductsBanner = () => {
    return (
        <div className=''>
            <h2 className='text-center text-white font-bold uppercase text-4xl mt-12'>My Tools</h2>
            <div className="hero min-h-screen bg-bg-neutral">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={hand} className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div>
                        <h1 className="text-5xl font-bold">My high quality products</h1>
                        <p className="py-6">Do you want to buy high quality robotics products? Then you can buy the product of your choice by clicking on the button below. click here All products!!</p>
                        <Link to="/myTools" className="btn btn-primary">Show All Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsBanner;
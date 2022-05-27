import React from 'react';
import { Link } from 'react-router-dom';
import hand from '../../assets/images/effect/maruti-suzuki-swift.jpg'

const ProductsBanner = () => {
    return (
        <div className=''>
            <h2 className='text-center text-white font-bold uppercase text-4xl mt-12'>My Tools</h2>
            <div className="hero min-h-screen bg-bg-neutral">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={hand} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Shop by Popular Parts</h1>
                        <p className="py-6">It was easy to find the part, price and checkout with out having to search every where..!!</p>
                        <Link to="/myTools" className="btn btn-primary">Show All Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsBanner;
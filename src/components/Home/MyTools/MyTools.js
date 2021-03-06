import React from 'react';
import Products from '../../Products/Products';
import effect from '.././../../assets/images/effect/car.png';


const MyTools = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-bg-neutral">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={effect} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Shop by Categories</h1>
                        <p className="py-6">The parts I got were just right, perfect fit, and very cheap. I pay more for the delivery than my fender liner. Thank you
                            Of course I will get my stuff with you guys, definitely.</p>
                    </div>
                </div>
            </div>
            <div className='my-16 bg-neutral'>
                <h2 className='text-center text-white font-bold uppercase text-4xl my-6'>My Tools</h2>
                <Products></Products>
            </div>
        </div>
    );
};

export default MyTools;
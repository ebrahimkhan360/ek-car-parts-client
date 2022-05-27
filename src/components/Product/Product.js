import React from 'react';
const Product = ({ product, setBuy }) => {
    const { _id, name, img, description, price, quantity } = product;
    return (
        <div className='bg-base-100  p-5 border-solid border-2 border-primary rounded-xl mx-5 my-5'>
            <img className='rounded-xl' src={img} alt="" />
            <p className='text-light font-bold text-xl mt-2'>Price: {price}</p>
            <h4 className='text-light font-bold text-xl'>Product Name: {name}</h4>
            <p className='text-light my-2'>Description: {description}</p>
            <p className='text-light font-bold text-xl'>Quantity: {quantity}</p>

            <div>
                <label
                    htmlFor="buy-modal"
                    onClick={() => setBuy(product)}
                    className="btn btn-primary font-bold my-6 text-white">BUY NoW</label>
            </div>
        </div>
    );
};

export default Product;
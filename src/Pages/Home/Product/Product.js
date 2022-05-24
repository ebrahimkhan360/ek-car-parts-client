import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ service }) => {
    const {_id, name, img, description, price, quantity } = service;
    const navigate = useNavigate();
    const navServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='product'>
            <img className='images' src={img} alt="" />
            <p className='text-light'><span className='font-bold'>Price:</span> {price}</p>
            <h4 className='text-light'> <span className='font-bold'>Product Name:</span> {name}</h4>
            <p className='text-light'><span className='font-bold'>Quantity:</span> {quantity}</p>
            <p className='text-light'><span className='font-bold'>Description:</span>{description}</p>
            
            <button onClick={() => navServiceDetail(_id)} className='button font-bold mt-4'>ORDER NOW</button>
            
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'
import './Products.css'
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id="products" className='m-5'>
             
            <div className='row'>
            <h1 className='m-5 p-2 font-bold products-title'>Shop By Categories</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            service={product}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
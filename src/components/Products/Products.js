import React, { useEffect, useState } from 'react';
import BuyModal from '../BuyModal/BuyModal';
import Product from '../Product/Product'
const Products = ({ name }) => {
    const [products, setProducts] = useState([]);
    const [buy, setBuy] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='bg-neutral'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            setBuy={setBuy}
                        ></Product>)
                    }
                </div>
            </div>
            {buy && <BuyModal
                name={name}
                buy={buy}
                setBuy={setBuy}
            ></BuyModal>}
        </div>
    );
};

export default Products;
import React from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from './ProductInfo';

const Orders = () => {

    const orders = useSelector(state => state.orders.data);
    return (
        !orders.length
        ? <p className="mt-3 ml-3">You haven't ordered anything yet.</p>
        : orders.map((product, index) => {
            return (
                <ProductInfo
                    key={index}
                    product={product}
                />
            )
        })
    )
}

export default Orders;
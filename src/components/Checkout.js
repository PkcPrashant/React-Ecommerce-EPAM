import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../redux';

const Checkout = () => {

    useEffect(() => {
        document.getElementById("header").innerHTML = "E Commerce | Checkout";
    }, [])

    const orderedProduct = useSelector(state => state.orderedProduct.data);
    const dispatch = useDispatch();

        orderedProduct.forEach((product) => { 
            product['date'] = new Date();
        })
        dispatch(fetchOrders(orderedProduct));

    return (
        <div>
            <span>Thank you for buying the product(s) with us.</span> 
        </div>
    );
}

export default Checkout;
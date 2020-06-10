import {
    ADD_PRODUCT_TO_CART,
    CLEAR_CART
} from './cartTypes';


export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

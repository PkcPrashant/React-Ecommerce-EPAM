import {
    FETCH_ORDERED_PRODUCT
} from './orderedProductTypes';

export const fetchOrderedProduct = (orderedProduct) => {
    return {
        type: FETCH_ORDERED_PRODUCT,
        payload: orderedProduct
    }
}

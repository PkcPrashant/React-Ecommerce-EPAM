import {
    FETCH_ORDERS
} from './ordersTypes';

export const fetchOrders = (orders) => {
    return {
        type: FETCH_ORDERS,
        payload: orders
    }
}

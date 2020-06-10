import {
    ADD_PRODUCT_TO_CART,
    CLEAR_CART
} from './cartTypes';

const initialState = {
    data: [],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_CART:
            return {
                data: [...state.data, action.payload]
            }
        case CLEAR_CART:
            return {
                data: []
            }
        default:
            return state;
    }
}

export default cartReducer;
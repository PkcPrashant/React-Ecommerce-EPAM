import {
    FETCH_ORDERS,
} from './ordersTypes';

const initialState = {
    data: [],
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ORDERS:
            return {
                data: [ ...state.data, ...action.payload ]
            }
        default:
            return state;
    }
}

export default ordersReducer;
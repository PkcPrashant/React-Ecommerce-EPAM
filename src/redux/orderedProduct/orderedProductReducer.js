import {
    FETCH_ORDERED_PRODUCT,
} from './orderedProductTypes';

const initialState = {
    data: [],
}

const orderedProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ORDERED_PRODUCT:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}

export default orderedProductReducer;
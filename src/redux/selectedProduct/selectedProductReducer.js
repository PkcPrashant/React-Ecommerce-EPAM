import {
    FETCH_SELECTED_PRODUCT_REQUEST,
    FETCH_SELECTED_PRODUCT_SUCCESS,
    FETCH_SELECTED_PRODUCT_FAILURE
} from './selectedProductTypes';

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const selectedProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SELECTED_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SELECTED_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_SELECTED_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default selectedProductReducer;
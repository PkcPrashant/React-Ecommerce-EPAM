import {
    FETCH_SELECTED_PRODUCT_REQUEST,
    FETCH_SELECTED_PRODUCT_SUCCESS,
    FETCH_SELECTED_PRODUCT_FAILURE
} from './selectedProductTypes';

import { put } from 'redux-saga/effects';

export function* fetchSelectedProductRequest(action) {
    try{
        const mockData = yield import('../../mockProductData');
        const data = mockData.default.find(item => item.isbn === action.payload );
        yield put(fetchSelectedProductSuccess(data));
    } catch(error) {
        yield put(fetchSelectedProductFailure(error));
    }
}

export const fetchSelectedProduct = (productId) => {
    return {
        type: FETCH_SELECTED_PRODUCT_REQUEST,
        payload: productId
    }
}

const fetchSelectedProductSuccess = (product) => {
    return {
        type: FETCH_SELECTED_PRODUCT_SUCCESS,
        payload: product
    }
}

const fetchSelectedProductFailure = (error) => {
    return {
        type: FETCH_SELECTED_PRODUCT_FAILURE,
        payload: error
    }
}
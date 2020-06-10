import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from './productsTypes';

import { put } from 'redux-saga/effects';

export function* fetchProductsRequest() {
    try{
        const data = yield import('../../mockProductData');
        yield put(fetchProductsSuccess(data.default))
    } catch(error) {
        yield put(fetchProductsFailure(error))
    }
}

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}
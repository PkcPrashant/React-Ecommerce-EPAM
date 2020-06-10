import { fetchProductsRequest } from '../products/productsAction';
import { fetchSelectedProductRequest } from '../selectedProduct/selectedProductAction';
import { takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS_REQUEST } from '../products/productsTypes';
import { FETCH_SELECTED_PRODUCT_REQUEST } from '../selectedProduct/selectedProductTypes';

export function* rootSaga() {
    yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsRequest);
    yield takeEvery(FETCH_SELECTED_PRODUCT_REQUEST, fetchSelectedProductRequest);
}

export default rootSaga;
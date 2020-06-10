import { combineReducers } from 'redux';
import productsReducer from './products/productsReducer';
import selectedProductReducer from './selectedProduct/selectedProductReducer';
import cartReducer from './cart/cartReducer';
import ordersReducer from './orders/ordersReducer';
import orderedProductReducer from './orderedProduct/orderedProductReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer,
    orders: ordersReducer,
    orderedProduct: orderedProductReducer
  })
  
  export default rootReducer
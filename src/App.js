import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Checkout from './components/Checkout';
import { BASE_URL, PRODUCT_DETAILS_URL, CART_URL, ORDERS_URL, CHECKOUT_URL } from './Urls';

function App() {
  console.log("WINDOW ", window.document.URL);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={BASE_URL} component={ProductList} />
        <Route path={PRODUCT_DETAILS_URL} component={ProductDetails} />
        <Route path={CART_URL} component={Cart} />
        <Route path={CHECKOUT_URL} component={Checkout} />
        <Route path={ORDERS_URL} component={Orders} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

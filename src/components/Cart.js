import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrderedProduct, clearCart } from "../redux";
import ProductInfo from "./ProductInfo";
import { CHECKOUT_URL, BASE_URL } from "../Urls";
import Address from "./Address";
import PaymentInfo from "./PaymentInfo";

const Cart = () => {

  const [isAddressAdded, setIsAddressAdded] = useState(false);
  const [isBuyClicked, setIsBuyClicked] = useState(false);

  const orderedProduct = useSelector(state => state.orderedProduct.data)
  const cartProduct = useSelector((state) => state.cart.data);
  console.log("ORDERED ", orderedProduct, !!orderedProduct.length, "CART " )
  const cart = orderedProduct && !!orderedProduct.length ? orderedProduct : cartProduct;
  const dispatch = useDispatch();

  console.log("ORDERED ", orderedProduct, orderedProduct, "CART ", cart)

  useEffect(() => {
    document.getElementById("header").innerHTML = "E Commerce | Cart";

    return() => {
      console.log("Unmount")
      dispatch(fetchOrderedProduct([]));
    }
  }, [dispatch]);

  const handleBuyProduct = (e) => {
    setIsBuyClicked(true);
    if(isAddressAdded) {
      dispatch(fetchOrderedProduct(cart));
      !(orderedProduct && !!orderedProduct.length) && dispatch(clearCart());
    }else {
      console.log("Add address");
      e.preventDefault()
    }
  };

  return !cart.length ? (
    <p className="m-3">Your Cart is Empty</p>
  ) : (
    <div className="row ml-2">
      <div className="col-md-4 mt-3">
        <Address setIsAddressAdded={setIsAddressAdded} isBuyClicked={isBuyClicked} />
      </div>
      <div className="col-md-8">
        {cart.map((product, index) => {
          return <ProductInfo key={index} product={product} />;
        })}
        <PaymentInfo />
        <Link to={CHECKOUT_URL}>
          <button
            className="btn btn-info m-3"
            onClick={(e) => handleBuyProduct(e)}
          >
            Checkout
          </button>
        </Link>
        <Link to={BASE_URL}>
          <button
            className="btn btn-info m-3"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

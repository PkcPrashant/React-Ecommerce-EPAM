import React from "react";
import { useSelector } from "react-redux";

const PaymentInfo = () => {
  const cart = useSelector((state) => state.cart.data);
  cart.forEach((product) => { 
    product['quantity'] = 1;
  })
  const itemsPrice = cart.reduce((initialPrice, product) => initialPrice + (product.pageCount * product.quantity), 0);
  const tax = 10;
  const shipping = 10;
  const total = tax + shipping + itemsPrice;

  return (
    <div className="p-2 m-3">
      <h5 className="card-title my-3">Payment Info</h5>
      <div>
        <span className="d-flex justify-content-between"><p>Items Price:</p><p>Rs { itemsPrice }</p></span>
        <span className="d-flex justify-content-between"><p>Tax</p><p>Rs { tax }</p></span>
        <span className="d-flex justify-content-between"><p>Shipping Charges</p><p>Rs { shipping }</p></span>
        <hr />
        <span className="d-flex justify-content-between"><p>Total</p><p>Rs { total }</p></span>
      </div> 
    </div>
  );
};

export default PaymentInfo;

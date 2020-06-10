import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSelectedProduct,
  addProductToCart,
  fetchOrderedProduct,
} from "../redux";
import ProductInfo from "./ProductInfo";

const ProductDetails = (props) => {
  const paramId = props.match.params.id;
  const product = useSelector((state) => state.selectedProduct.data);
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("EFFECT CALLED")
    document.getElementById("header").innerHTML = `E Commerce | ${product.title}`;
    dispatch(fetchSelectedProduct(paramId));
  }, [dispatch, paramId, product]);

  const handleCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleBuyProduct = () => {
    dispatch(fetchOrderedProduct([product]));
  };

  return (
    <ProductInfo
      product={product}
      cart={cart}
      handleCart={handleCart}
      handleBuyProduct={handleBuyProduct}
    />
  );
};

export default ProductDetails;

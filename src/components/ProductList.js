import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux";

import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById("header").innerHTML = "E Commerce";
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return products && products.loading ? (
    <p>Loading</p>
  ) : products.error ? (
    <p>Something went Wrong. {products.error}</p>
  ) : (
    <div className="d-flex flex-wrap justify-content-around">
      {products.data.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;

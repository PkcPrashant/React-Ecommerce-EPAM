import React from 'react';
import { Link } from 'react-router-dom'
import { CART_URL } from '../Urls';

const ProductInfo = ({product, ...props}) => {
    console.log("PRODUCT ", product)
    return (
        <div className="card bg-light p-2 m-3">
            { 
                product.date && 
                <div className="card-header bg-info d-flex justify-content-between">
                    <h5>Order Placed: {product.date.toDateString()}</h5>
                    <h5>Status: Active</h5>
                </div> 
            }
            <div className="row">
                <div className="col-md-2">
                    <img src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png" className="card-img" alt="product" />
                </div>
                <div className="col-md-10 card-body pt-0">
                    <h5 className="card-header pl-1">{product.title}</h5>
                    <p className="card-text">Price: Rs {product.pageCount}</p> {/*Replace page count with Price*/}
                    <p className="card-text">Author: {product.authors && product.authors.join(", ")}</p>
                    <p className="card-text">Total Pages: {product.pageCount}</p>
                    <p className="card-text">Category: {product.categories && product.categories.join(", ")}</p>
                    <p className="card-text">ISBN: {product.isbn}</p>
                    

                    {
                        props && props.cart && (
                        <>
                            <p className="card-text">{product.shortDescription}</p>
                            { 
                                props.cart.find(products => products.title === product.title)
                                    ? <Link to={CART_URL}><button className="btn btn-info m-3">Go to Cart</button></Link>
                                    : <button className="btn btn-info m-3" onClick={() => props.handleCart()}>Add to Cart</button>
                            }
                            <Link to={CART_URL}>
                                <button className="btn btn-info m-3" onClick={() => props.handleBuyProduct()}>Buy Now</button>
                            </Link>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
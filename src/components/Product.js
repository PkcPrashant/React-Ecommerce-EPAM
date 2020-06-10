import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAILS_URL_WITH_PARAMS } from '../Urls';

const Product = ({product}) => {
    return (
        <div className="card shadow p-3 my-3 mx-2 rounded col-md-2">
            <img className="card-img-top img-rounded" src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png" alt="product"></img>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.categories.join(", ")}</p>
                <p className="card-text">{product.authors.join(", ")}</p>
                <Link to={PRODUCT_DETAILS_URL_WITH_PARAMS(product.isbn)}>
                    <button className="btn btn-info">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Product;
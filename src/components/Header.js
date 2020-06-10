import React from "react";
import { Link } from 'react-router-dom';
import { BASE_URL, CART_URL, ORDERS_URL } from '../Urls';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link" to={BASE_URL} id="header">E Commerce</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-5 ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={BASE_URL}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={ORDERS_URL}>My Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={CART_URL}>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

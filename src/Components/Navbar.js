import React from "react";
import cart from "../Media/shopping-bag.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useSelector } from "react-redux";

function Navbar() {
  const cartStore = useSelector((state) => state.cart);

  return (
    <div className="top">
      <nav className="navbar navbar-fixed-top container-fluid navbar-main px-5 mx-auto navbar-expand-lg">
        <div>
          <Link className="link" to={"/"}>
            <h2>OnlineShop</h2>
          </Link>
        </div>
        <button
          className="navbar-toggler btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-rotate color-crimson">
            |||
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="link" to={"/product"}>
                Shop Now!
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to={"/about"}>
                About
              </Link>
            </li>
            <Link
              title={`${cartStore.cartTotalQuantity} items in your cart`}
              to={"/cart"}
              className="nav-item link pos-cart"
            >
              <img className="cart" src={cart} alt="shopping cart" />
              <div className="cart-amount">{cartStore.cartTotalQuantity}</div>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import cart from "../Media/carts.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function Navbar() {
  const history = useNavigate();

  const handleCart = () => {
    history("/cart");
  };

  return (
    <div className="top">
      <nav className="navbar navbar-fixed-top container-fluid navbar-main col-10 mx-auto navbar-expand-lg">
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
            <Link onClick={handleCart} to={"/cart"} className="nav-item">
              <img className="cart" src={cart} alt="shopping cart" />
              {/* {state.cartItems.payload} */}
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

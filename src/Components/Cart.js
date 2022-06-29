import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  removeFromCart,
  addToCart,
  decreaseCart,
  clearCart,
  getTotals,
} from "../Features/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemove = (cart) => {
    dispatch(removeFromCart(cart));
  };

  const handleAdd = (cart) => {
    dispatch(addToCart(cart));
  };

  const handleSubtract = (cart) => {
    dispatch(decreaseCart(cart));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="cart-container"
    >
      <ToastContainer />
      <div className="prod-banner"></div>
      {cart.cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Cart is Empty</h2>
          <Link className="link" to={"/product"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>

            <h2>Start Shopping</h2>
          </Link>
        </div>
      ) : (
        <div className="cart-container-main">
          <h2 className="cart-heading">Shopping Cart</h2>
          <div className="titles">
            <h3 className="product-title">Products</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="shopping-cart">
            {cart.cartItems?.map((cart) => (
              <div className="cart-item" key={cart.id}>
                <div className="cart-product">
                  <img
                    className="cart-img"
                    src={cart.image}
                    alt={cart.category}
                  />
                  <div className="cart-product-added">
                    <h5>{cart.title}</h5>
                    <button onClick={() => handleRemove(cart)}>Remove</button>
                  </div>
                </div>
                <div>{cart.price}$</div>
                <div className="cart-quantity-change">
                  <button onClick={() => handleAdd(cart)}>+</button>
                  <div>{cart.cartQuantity}</div>
                  <button onClick={() => handleSubtract(cart)}>-</button>
                </div>
                <div>
                  {parseFloat(cart.price * cart.cartQuantity).toFixed(2)}$
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button onClick={() => handleClear()}>Clear Cart</button>
            <div className="checkout">
              <div>
                <span>Subtotal - </span>
                <span>{parseFloat(cart.cartTotalAmount).toFixed(2)} $</span>
              </div>
              <p>*Free Shipping</p>
              <Link className="link" to={"/checkout"}>
                <button>CheckOut</button>
              </Link>
              <Link className="link" to={"/product"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-arrow-left-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>

                <h2>Continue Shopping</h2>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </motion.div>
  );
}

export default Cart;

// To get a number upto 2 decimal places
// num = Number
// parseFloat(num).toFixed(2)

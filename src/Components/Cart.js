import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  removeFromCart,
  addToCart,
  decreaseCart,
  clearCart,
} from "../Features/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    <div className="cart-container">
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
                  <button onClick={(cart) => handleAdd(cart)}>+</button>
                  <div>{cart.cartQuantity}</div>
                  <button onClick={(cart) => handleSubtract(cart)}>-</button>
                </div>
                <div>{cart.price * cart.cartQuantity}$</div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button onClick={() => handleClear()}>Clear Cart</button>
            <div className="checkout">
              <div>
                <span>Subtotal - </span>
                <span>{cart.cartTotalAmount} $</span>
              </div>
              <p>Free Shipping</p>
              <button>CheckOut</button>
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
    </div>
  );
}

export default Cart;

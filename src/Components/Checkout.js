import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  //   console.log(cart);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="checkout-main"
    >
      <div className="checkout-container">
        <h2>You have {cart.cartTotalQuantity} items in the cart</h2>
        <h2>Your Billing amount is {cart.cartTotalAmount}$</h2>
        <button>Pay Now</button>
        <div className="d-flex checkout-div justify-content-around">
          <Link className="checkout-link" to={"/product"}>
            <h6>Continue Shopping</h6>
          </Link>
          <Link className="checkout-link" to={"/cart"}>
            <h6>Back To Cart</h6>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Checkout;

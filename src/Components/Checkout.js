import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux/es/exports";
import { paymentDone } from "../Features/cartSlice";
import confetti from "canvas-confetti";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [pay, setPay] = useState(false);
  // const [confetti, setConfetti] = useState(false);
  const dispatch = useDispatch();
  //   console.log(cart);

  const payNow = () => {
    setPay(true);
    dispatch(paymentDone());
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="checkout-main">
        <div className={`${pay ? "payed" : "d-none"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <h1>Payment Done</h1>
          <Link className="link" to={"/product"}>
            Continue Shopping
          </Link>
        </div>
        <div className={`checkout-container ${pay ? "d-none" : ""}`}>
          <h2>You have {cart.cartTotalQuantity} items in the cart</h2>
          <h2>
            Your Billing amount is {parseFloat(cart.cartTotalAmount).toFixed(2)}
            $
          </h2>
          <button onClick={() => payNow()}>Pay Now</button>
          <div className="d-flex checkout-div justify-content-around">
            <Link className="checkout-link" to={"/product"}>
              <h6>Continue Shopping</h6>
            </Link>
            <Link className="checkout-link" to={"/cart"}>
              <h6>Back To Cart</h6>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Checkout;

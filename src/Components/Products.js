import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { motion } from "framer-motion";
import { addToCart } from "../Features/cartSlice";
import { ToastContainer } from "react-toastify";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

function Products() {
  const productData = useRef([]);
  const [receivedData, setReceivedData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        productData.current = data.data;
        console.log("Data", productData.current);
        setReceivedData(true);
      });
      return 0;
    };
    getData();
  }, []);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="prod-container"
    >
      <ToastContainer />
      <div className="prod-banner"></div>
      <h1 className="title">Products</h1>
      <div className="items-container">
        {productData.current.map((data) =>
          receivedData ? (
            <div className="product" key={data.id}>
              <img className="prod-img" alt={data.category} src={data.image} />
              <h5>{data.title}</h5>
              <h2> Price:- {parseInt(data.price, 10)}$ </h2>
              <button onClick={() => handleAdd(data)}>Add To Cart</button>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </motion.div>
  );
}

export default Products;

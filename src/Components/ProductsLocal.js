import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../Features/cartSlice";
import { ToastContainer } from "react-toastify";
import { useGetAllProductsQuery } from "../Features/productsApi";

function ProductLocal() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

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
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((data) => (
            <div className="product" key={data.id}>
              <img className="prod-img" alt={data.category} src={data.image} />
              <h5>{data.title}</h5>
              <h2> Price:- {parseInt(data.price, 10)}$ </h2>
              <button onClick={() => handleAdd(data)}>Add To Cart</button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

export default ProductLocal;

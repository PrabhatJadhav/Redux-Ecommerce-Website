import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../Features/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetAllProductsQuery } from "../Features/productsApi";
import { getTotals } from "../Features/cartSlice";
import Footer from "./Footer";

function ProductLocal() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  // console.log("Error", error);
  // console.log("Data Recieved", data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error !== undefined || error?.originalStatus === 404) {
    setTimeout(() => {
      const result = window.confirm(
        "We are unable to fetch the products data, Press OK to try again"
      );
      if (result === true) {
        window.location.reload();
      }
    }, 2000);
  }

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
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
      <div className="data-container">
        {isLoading ? (
          <div className="product-loading">
            <div className="ball"></div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div>
            <h1 className="title">Products</h1>
            <div className="items-container">
              {data.map((data) => (
                <div className="product" key={data.id}>
                  <img
                    className="prod-img"
                    alt={data.category}
                    src={data.image}
                  />
                  <h5>{data.title}</h5>
                  <h2> Price:- {data.price}$ </h2>
                  <button onClick={() => handleAdd(data)}>Add To Cart</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
}

export default ProductLocal;

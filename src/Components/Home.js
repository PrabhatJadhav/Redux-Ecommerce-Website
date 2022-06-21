import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <section>
        <div className="home-pg">
          <div className="info">
            <h1>Welcome To The Store</h1>
            <h6>Only the best Products for our Customers</h6>
            <Link to={"/product"}>
              <button>Products</button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;

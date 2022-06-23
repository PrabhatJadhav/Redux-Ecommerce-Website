import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="height bg-black border-btm pt-5"
    >
      <div className="error-pg">
        <h1 className="color-white">Error 404</h1>
        <h2 className="color-white">Page Not Found</h2>
        <p>
          <Link className="" to="/home">
            Go To Home Page
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default ErrorPage;

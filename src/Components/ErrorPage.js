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
      className=""
    >
      <div className="height error-pg">
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
        <Link className="" to="/home">
          Go To Home Page
        </Link>
      </div>
    </motion.div>
  );
}

export default ErrorPage;

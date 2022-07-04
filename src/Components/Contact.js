import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="d-flex justify-content-center align-items-center prod-banner">
        <div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="col form-container container-fluid pt-5">
        <div className="container-fluid bg-contact b-rad d-flex justify-content-center">
          <div>
            <h4 className="color-white text-center">
              Fill this form and our team will get back to you within 24 hours
            </h4>
          </div>
        </div>
        <div className="col pt-0 pb-5 d-flex flex-column justify-content-center align-self-center">
          <div className="row justify-content-center g-3 mt-3">
            <div className="col-md-4 w-a ms-3 p-0">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col-md-4 w-a ms-3 p-0">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row justify-content-center g-3 mt-3">
            <div className="col-md-4 w-a ms-3 p-0">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="col-md-4 w-a ms-3 p-0">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Contact Number"
                aria-label="Contact Number"
              />
            </div>
          </div>
          <div className="row justify-content-center g-3 mt-3">
            <div className="col-md-4 d-flex justify-content-center ms-3">
              <textarea
                className="p-1"
                placeholder="Message For Us"
                cols="38"
                rows="6"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="mt-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

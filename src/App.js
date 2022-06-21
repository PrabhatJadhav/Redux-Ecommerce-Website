import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Navbar from "./Components/Navbar";
import "./main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="App"
    >
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </motion.div>
  );
}

export default App;
